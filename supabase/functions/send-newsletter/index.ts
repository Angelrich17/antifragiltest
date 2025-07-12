import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.5";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendNewsletterRequest {
  articleId: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { articleId }: SendNewsletterRequest = await req.json();

    // Get article details
    const { data: article, error: articleError } = await supabase
      .from('blog_articles')
      .select('*')
      .eq('id', articleId)
      .eq('published', true)
      .single();

    if (articleError || !article) {
      console.error('Article not found:', articleError);
      return new Response(
        JSON.stringify({ error: "Artículo no encontrado" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get all active subscribers
    const { data: subscribers, error: subscribersError } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('is_active', true);

    if (subscribersError) {
      throw subscribersError;
    }

    if (!subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ message: "No hay suscriptores activos" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const emailPromises = subscribers.map(subscriber => 
      resend.emails.send({
        from: "Antifragile Advisors <info@antifragileadvisors.com>",
        to: [subscriber.email],
        subject: `Nuevo artículo: ${article.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2563eb;">${article.title}</h1>
            ${article.excerpt ? `<p style="font-size: 16px; color: #6b7280;">${article.excerpt}</p>` : ''}
            <p>Hemos publicado un nuevo artículo en nuestro blog que creemos que te interesará.</p>
            <a href="https://antifragileadvisors.com/blog" 
               style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0;">
              Leer artículo completo
            </a>
            <p style="font-size: 14px; color: #9ca3af; margin-top: 40px;">
              Si no deseas recibir más emails, puedes darte de baja en cualquier momento.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="font-size: 12px; color: #9ca3af;">
              © 2024 Antifragile Advisors. Todos los derechos reservados.
            </p>
          </div>
        `,
      })
    );

    const results = await Promise.allSettled(emailPromises);
    const successful = results.filter(result => result.status === 'fulfilled').length;
    const failed = results.filter(result => result.status === 'rejected').length;

    console.log(`Newsletter sent: ${successful} successful, ${failed} failed`);

    return new Response(
      JSON.stringify({ 
        message: `Newsletter enviado a ${successful} suscriptores`,
        successful,
        failed 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error('Error in send-newsletter function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
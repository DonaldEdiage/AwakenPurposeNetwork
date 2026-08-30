// app/api/dropbox/callback/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get the authorization code from the URL
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    // Exchange the code for tokens
    const tokenResponse = await fetch(
      "https://api.dropboxapi.com/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          code: code,
          grant_type: "authorization_code",
          client_id: process.env.DROPBOX_APP_KEY!,
          client_secret: process.env.DROPBOX_APP_SECRET!,
          redirect_uri: `${process.env.NEXT_PRIVATE_BASE_URL}/api/dropbox/callback`,
        }),
      },
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error("Token exchange error:", tokenData);
      return NextResponse.json(
        { error: "Failed to exchange code" },
        { status: 500 },
      );
    }

    // The refresh token is in tokenData.refresh_token
    const refreshToken = tokenData.refresh_token;

    // For simplicity in this explanation, we'll just log it.
    // In production, you'd store it in a secure database or Vercel's environment variables.
    console.log("✅ Refresh token:", refreshToken);
    console.log("✅ Access token (short-lived):", tokenData.access_token);

    // Return a success page
    return new Response(
      `
      <html>
        <body style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">
          <h1 style="color: #0061ff;">✅ Dropbox Connected!</h1>
          <p>Your Dropbox account has been successfully connected.</p>
          <p style="color: #888; font-size: 14px;">
            Refresh token: <code style="background: #f4f4f4; padding: 2px 6px; border-radius: 4px;">${refreshToken}</code>
          </p>
          <p style="color: #888; font-size: 14px;">
            ⚠️ Copy this refresh token and add it to your environment variables as <strong>DROPBOX_REFRESH_TOKEN</strong>
          </p>
          <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #0061ff; color: white; text-decoration: none; border-radius: 6px;">
            Go to Home
          </a>
        </body>
      </html>
    `,
      {
        headers: { "Content-Type": "text/html" },
      },
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

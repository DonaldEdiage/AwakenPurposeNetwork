// app/api/dropbox/auth/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Your App Key from Dropbox App Console
  const clientId = process.env.DROPBOX_APP_KEY;

  // The URL where Dropbox will redirect after authorization
  const redirectUri = `${process.env.NEXT_PRIVATE_BASE_URL}/api/dropbox/callback`;

  // Build the authorization URL
  const authUrl = `https://www.dropbox.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&token_access_type=offline`;

  // Redirect the user to Dropbox
  return NextResponse.redirect(authUrl);
}

import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { placeName } = await request.json();
  const baseUrl = 'https://places.googleapis.com/v1/places:searchText';
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY!,
      "X-Goog-FieldMask": ["places.photos", "places.displayName", "places.id"],
    },
  };
  try {
    const result = await axios.post(
    baseUrl,
    {
      textQuery: placeName,
    },
    config
  );

  const placeRefName = result?.data?.places[0]?.photos[0]?.name || result?.data?.places[0]?.name;
  const PhotoRefUrl = `https://places.googleapis.com/v1/${placeRefName}/media?maxWidthPx=600&maxHeightPx=600&key=${process.env.GOOGLE_MAPS_API_KEY!}`;

  return NextResponse.json(PhotoRefUrl);
  } catch (error) {
    if (error instanceof AxiosError) {
        console.error('Axios error response data:', error.response?.data);
    }
    console.error( error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

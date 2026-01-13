import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/upload
 * Placeholder endpoint for file upload
 * In production, this will handle file storage and initial processing
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files');

    if (files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided', success: false },
        { status: 400 }
      );
    }

    // Simulate upload processing
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock response
    const uploadedFiles = files.map((file: any) => ({
      id: `file-${Date.now()}-${Math.random()}`,
      name: file.name,
      size: file.size,
      type: file.type,
      url: `/uploads/${file.name}`, // Mock URL
      uploadedAt: new Date().toISOString(),
    }));

    return NextResponse.json({
      files: uploadedFiles,
      success: true,
      message: 'Files uploaded successfully',
    });
  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json(
      { error: 'Failed to upload files', success: false },
      { status: 500 }
    );
  }
}

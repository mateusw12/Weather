export class SearchImage {
  total: number = 0;
  total_pages: number = 0;
  results: SearchImageResults[] = [];
}

export class SearchImageResults {
  alt_description: string = '';
  blur_hash: string = '';
  color: string = '';
  created_at: string = '';
  description: string = '';
  height: number = 0;
  width: number = 0;
  id: string = '';
  likes: number = 0;
  urls: SearchImagesUrl[] = [];
}

export class SearchImagesUrl {
  full: string = '';
  raw: string = '';
  regular: string = '';
  small: string = '';
  small_s3: string = '';
  thumb: string = '';
}

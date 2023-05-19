const CDN_PLACEHOLDERS_BASE_PATH = `${import.meta.env.VITE_CDN_ORIGIN}/${import.meta.env.VITE_CDN_PLACEHOLDERS_BUCKET}`;

export const ASSET_MANAGER_PLACEHOLDERS_BASE_PATH = `${CDN_PLACEHOLDERS_BASE_PATH}/asset-manager`;
export const BLOG_PLACEHOLDERS_BASE_PATH = `${CDN_PLACEHOLDERS_BASE_PATH}/blog`;
export const ECOMMERCE_PRODUCT_PLACEHOLDERS_BASE_PATH = `${CDN_PLACEHOLDERS_BASE_PATH}/ecommerce-product`;
export const GRID_GALLERY_PLACEHOLDERS_BASE_PATH = `${CDN_PLACEHOLDERS_BASE_PATH}/grid-gallery`;
export const INSTAGRAM_PLACEHOLDERS_BASE_PATH = `${CDN_PLACEHOLDERS_BASE_PATH}/instagram`;
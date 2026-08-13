import { apiClient, extractResponseData } from './apiClient';

// ── TypeScript Interfaces ───────────────────────────────────────────────────

export interface BusinessForm {
  name: string;
  email: string;
  phone: string;
  occupation: string;
  city: string;
  state: string;
  hearAboutUs: string;
  message: string;
}

export interface ContactUs {
  firstName: string;
  lastName?: string | null;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface GrievanceForm {
  name: string;
  email: string;
  phone: string;
  distributionId: string;
  category?: string | null;
  message: string;
}

export interface QueryParams {
  Search?: string;
  PageNumber?: number;
  PageSize?: number;
}

export interface ProductsQueryParams {
  categoryId?: number;
  search?: string;
}

// ── API Services ─────────────────────────────────────────────────────────────

export const DealsForeverApi = {
  // ── Banner Service ──
  getAllBanners: async (params?: QueryParams) => {
    const response = await apiClient.get('/Banner/get-all-banner', { params });
    return extractResponseData<any>(response);
  },

  // ── Branch Service ──
  getAllBranches: async () => {
    const response = await apiClient.get('/Branch/get-all-branch');
    return extractResponseData<any>(response);
  },

  // ── BranchCategory Service ──
  getAllBranchCategories: async () => {
    const response = await apiClient.get('/BranchCategory/get-all-branch-category');
    return extractResponseData<any>(response);
  },

  // ── BusinessForm (Opportunity) Service ──
  sendBusinessMessage: async (payload: BusinessForm) => {
    const response = await apiClient.post('/BusinessForm/SendMessage', payload);
    return extractResponseData<any>(response);
  },

  // ── Category Service ──
  getAllCategories: async (params?: QueryParams) => {
    const response = await apiClient.get('/Category/get-all-category', { params });
    return extractResponseData<any>(response);
  },

  // ── CategoryBanner Service ──
  getAllCategoryBanners: async () => {
    const response = await apiClient.get('/CategoryBanner/get-all-category-banner');
    return extractResponseData<any>(response);
  },

  // ── Compliance Service ──
  getAllCompliance: async () => {
    const response = await apiClient.get('/Compliance/get-all-compliance');
    return extractResponseData<any>(response);
  },

  // ── Contact Service ──
  sendContactMessage: async (payload: ContactUs) => {
    const response = await apiClient.post('/Contact/SendMessage', payload);
    return extractResponseData<any>(response);
  },

  // ── District Service ──
  getAllDistricts: async () => {
    const response = await apiClient.get('/District/get-all-district');
    return extractResponseData<any>(response);
  },

  // ── Documents Service ──
  getAllDocuments: async () => {
    const response = await apiClient.get('/Documents/get-all-document');
    return extractResponseData<any>(response);
  },

  // ── FAQ Service ──
  getAllFaqs: async () => {
    const response = await apiClient.get('/Faq/get-all-faq');
    return extractResponseData<any>(response);
  },

  // ── FinancialFreedom Service ──
  getAllFinancialFreedom: async (params?: QueryParams) => {
    const response = await apiClient.get('/FinancialFreedom/get-all-financial-freedom', { params });
    return extractResponseData<any>(response);
  },

  // ── Gallery Service ──
  getAllGallery: async (params?: QueryParams) => {
    const response = await apiClient.get('/Gallery/get-all-gallery', { params });
    return extractResponseData<any>(response);
  },

  // ── Grievance Service ──
  sendGrievanceMessage: async (payload: GrievanceForm) => {
    const response = await apiClient.post('/GrievanceForm/SendMessage', payload);
    return extractResponseData<any>(response);
  },

  // ── Indexpopup Service ──
  getAllIndexPopups: async () => {
    const response = await apiClient.get('/Indexpopup/get-all-index-popup');
    return extractResponseData<any>(response);
  },

  // ── NewsandMedia Service ──
  getAllNewsAndMedia: async () => {
    const response = await apiClient.get('/NewsandMedia/get-all-news-and-media');
    return extractResponseData<any>(response);
  },

  // ── NewsBanner Service ──
  getAllNewsBanners: async () => {
    const response = await apiClient.get('/NewsBanner/get-all-newsbanner');
    return extractResponseData<any>(response);
  },

  // ── Offer Service ──
  getAllOffers: async () => {
    const response = await apiClient.get('/Offer/get-all-offers');
    return extractResponseData<any>(response);
  },

  // ── OfferBanner Service ──
  getAllOfferBanners: async () => {
    const response = await apiClient.get('/OfferBanner/get-all-offerbanner');
    return extractResponseData<any>(response);
  },

  // ── OurBrands Service ──
  getAllOurBrands: async (params?: QueryParams) => {
    const response = await apiClient.get('/OurBrands/get-all-ourbrand', { params });
    return extractResponseData<any>(response);
  },

  // ── Products Service ──
  getAllProducts: async (params?: ProductsQueryParams) => {
    const response = await apiClient.get('/Products/get-all-product', { params });
    return extractResponseData<any>(response);
  },

  // ── RecurrenceType Service ──
  getAllRecurrenceTypes: async () => {
    const response = await apiClient.get('/RecurrenceType/get-all-recurrence-type');
    return extractResponseData<any>(response);
  },

  // ── Schedule Service ──
  getAllSchedules: async () => {
    const response = await apiClient.get('/Schedule/get-all-schedule');
    return extractResponseData<any>(response);
  },

  // ── ScheduleType Service ──
  getAllScheduleTypes: async () => {
    const response = await apiClient.get('/ScheduleType/get-all-schedule-type');
    return extractResponseData<any>(response);
  },

  // ── State Service ──
  getAllStates: async () => {
    const response = await apiClient.get('/State/get-all-state');
    return extractResponseData<any>(response);
  },

  // ── SuccessStory Service ──
  getAllSuccessStories: async (params?: QueryParams) => {
    const response = await apiClient.get('/SuccessStory/get-all-success-story', { params });
    return extractResponseData<any>(response);
  },

  // ── SuccessStoryBanner Service ──
  getAllSuccessStoryBanners: async () => {
    const response = await apiClient.get('/SuccessStoryBanner/get-all-success-story-banner');
    return extractResponseData<any>(response);
  },

  // ── Team Service ──
  getAllTeam: async () => {
    const response = await apiClient.get('/Team/get-all-team');
    return extractResponseData<any>(response);
  },

  // ── Testimonial Service ──
  getAllTestimonials: async () => {
    const response = await apiClient.get('/Testimonial/get-all-testimonial');
    return extractResponseData<any>(response);
  },

  // ── TestimonialBanner Service ──
  getAllTestimonialBanners: async () => {
    const response = await apiClient.get('/TestiomonialBanner/get-all-testimonial-banner');
    return extractResponseData<any>(response);
  },

  // ── VideoGallery Service ──
  getAllVideoGallery: async () => {
    const response = await apiClient.get('/VideoGallery/get-all-video-gallery');
    return extractResponseData<any>(response);
  },

  // ── WeekDay Service ──
  getAllWeeks: async () => {
    const response = await apiClient.get('/WeekDay/get-all-week');
    return extractResponseData<any>(response);
  },
};

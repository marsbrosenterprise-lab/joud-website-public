export type ProductCategory = {
  name: string;
  slug: string;
  description: string;
  image: string;
  href: string;
  enquiry: string;
};

export const productCategories: ProductCategory[] = [
  { name: 'Dates', slug: 'dates', description: 'A considered collection of naturally rich dates.', image: '/images/cat_dates.jpg', href: '/dates', enquiry: 'Dates' },
  { name: 'Stuffed Dates', slug: 'stuffed-dates', description: 'Thoughtful combinations made for gifting and sharing.', image: '/images/cat_stuffed.jpg', href: '#enquire', enquiry: 'Stuffed Dates' },
  { name: 'Chocolate Dates', slug: 'chocolate-dates', description: 'A gentle meeting of deep cocoa and natural sweetness.', image: '/images/cat_choc.jpg', href: '#enquire', enquiry: 'Chocolate Dates' },
  { name: 'Mamool & Sweets', slug: 'mamool-and-sweets', description: 'Familiar sweetness with a refined JOUD finish.', image: '/images/cat_mamool.jpg', href: '#enquire', enquiry: 'Mamool and Sweets' },
  { name: 'Coffee & More', slug: 'coffee-and-more', description: 'Small rituals, carefully chosen for your table.', image: '/images/cat_coffee.jpg', href: '#enquire', enquiry: 'Coffee and More' },
  { name: 'Dry Fruits', slug: 'dry-fruits', description: 'Everyday staples selected for texture and flavour.', image: '/images/cat_dryfruits.jpg', href: '#enquire', enquiry: 'Dry Fruits' },
  { name: 'Signature Range', slug: 'signature-range', description: 'The JOUD point of view, in its most considered form.', image: '/images/cat_signature.jpg', href: '#enquire', enquiry: 'Signature Range' },
  { name: 'Gifting Range', slug: 'gifting-range', description: 'A beautiful gesture for the occasions that matter.', image: '/images/cat_gifting.jpg', href: '#enquire', enquiry: 'Gifting Range' }
];

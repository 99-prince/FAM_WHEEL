/* ---------------------------------------------------------------------- */
/* 1. MOCK DATA                                                            */
/* ---------------------------------------------------------------------- */

const farmers = [
  { id: 'f1', name: 'Rajesh Kumar', avatar: 'https://i.pravatar.cc/150?img=12', location: 'Jaipur, Rajasthan', verified: true, rating: 4.8, reviews: 62, yearsFarming: 18, mainCrops: ['Wheat', 'Mustard'], totalSales: 214000 },
  { id: 'f2', name: 'Suresh Yadav', avatar: 'https://i.pravatar.cc/150?img=33', location: 'Alwar, Rajasthan', verified: true, rating: 4.6, reviews: 41, yearsFarming: 25, mainCrops: ['Onion', 'Bajra'], totalSales: 356000 },
  { id: 'f3', name: 'Manoj Sharma', avatar: 'https://i.pravatar.cc/150?img=53', location: 'Kota, Rajasthan', verified: false, rating: 4.2, reviews: 15, yearsFarming: 9, mainCrops: ['Soybean', 'Coriander'], totalSales: 88000 },
  { id: 'f4', name: 'Devi Lal Meena', avatar: 'https://i.pravatar.cc/150?img=15', location: 'Sikar, Rajasthan', verified: true, rating: 4.9, reviews: 88, yearsFarming: 30, mainCrops: ['Tomato', 'Onion', 'Groundnut'], totalSales: 512000 },
  { id: 'f5', name: 'Kailash Chand Prajapat', avatar: 'https://i.pravatar.cc/150?img=60', location: 'Bikaner, Rajasthan', verified: true, rating: 4.5, reviews: 29, yearsFarming: 14, mainCrops: ['Guar', 'Moong'], totalSales: 145000 },
  { id: 'f6', name: 'Ramniwas Choudhary', avatar: 'https://i.pravatar.cc/150?img=68', location: 'Jodhpur, Rajasthan', verified: true, rating: 4.7, reviews: 53, yearsFarming: 22, mainCrops: ['Cumin', 'Wheat'], totalSales: 298000 },
];

const buyers = [
  { id: 'b1', name: 'Anita Traders', avatar: 'https://i.pravatar.cc/150?img=32', location: 'Jaipur, Rajasthan', verified: true, rating: 4.7, businessName: 'Anita Traders Pvt. Ltd.', buyerType: 'Wholesaler' },
  { id: 'b2', name: 'Vikram Singh', avatar: 'https://i.pravatar.cc/150?img=51', location: 'Ajmer, Rajasthan', verified: true, rating: 4.4, businessName: 'Green Basket Retail', buyerType: 'Retailer' },
  { id: 'b3', name: 'Priya Kitchen Foods', avatar: 'https://i.pravatar.cc/150?img=45', location: 'Udaipur, Rajasthan', verified: false, rating: 4.1, businessName: 'Priya Kitchen Foods', buyerType: 'Restaurant' },
];

const transportProviders = [
  { id: 't1', name: 'Mahesh Logistics', avatar: 'https://i.pravatar.cc/150?img=8', location: 'Jaipur, Rajasthan', verified: true, rating: 4.6, vehicleType: 'Mini Truck', vehicleNumber: 'RJ14 GT 4521', capacity: '3 Ton', serviceAreas: ['Jaipur', 'Ajmer', 'Sikar'], pricePerKm: 22, deliveries: 312 },
  { id: 't2', name: 'Om Sai Transport', avatar: 'https://i.pravatar.cc/150?img=14', location: 'Kota, Rajasthan', verified: true, rating: 4.3, vehicleType: 'Tata Ace', vehicleNumber: 'RJ20 CD 9087', capacity: '1 Ton', serviceAreas: ['Kota', 'Bundi'], pricePerKm: 15, deliveries: 96 },
  { id: 't3', name: 'Rathore Truck Union', avatar: 'https://i.pravatar.cc/150?img=25', location: 'Jodhpur, Rajasthan', verified: true, rating: 4.8, vehicleType: 'Truck', vehicleNumber: 'RJ19 UP 1123', capacity: '9 Ton', serviceAreas: ['Jodhpur', 'Bikaner'], pricePerKm: 34, deliveries: 540 },
];

const crops = [
  { id: 'c1', name: 'Wheat', category: 'Grains', images: ['https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80','https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80'], quantity: 500, unit: 'kg', price: 28, minPrice: 25, harvestDate: '2026-08-05', grade: 'A', organic: false, description: 'Sharbati wheat, well-cleaned and dried, stored in a moisture-free godown. Good for atta mills and bulk retail.', location: 'Chomu, Jaipur', farmerId: 'f1', posted: '2026-08-12' },
  { id: 'c2', name: 'Mustard', category: 'Oilseeds', images: ['https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80','https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80'], quantity: 1200, unit: 'kg', price: 56, minPrice: 52, harvestDate: '2026-03-15', grade: 'A', organic: true, description: 'High oil-content mustard seeds grown without chemical pesticides across the season.', location: 'Kotputli, Jaipur', farmerId: 'f1', posted: '2026-08-01' },
  { id: 'c3', name: 'Onion', category: 'Vegetables', images: ['https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=80','https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&q=80'], quantity: 3000, unit: 'kg', price: 18, minPrice: 15, harvestDate: '2026-07-28', grade: 'B', organic: false, description: 'Nashik-variety red onions, medium size, cured and ready for dispatch to wholesale mandis.', location: 'Mundawar, Alwar', farmerId: 'f2', posted: '2026-08-14' },
  { id: 'c4', name: 'Tomato', category: 'Vegetables', images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80','https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=800&q=80'], quantity: 800, unit: 'kg', price: 22, minPrice: 18, harvestDate: '2026-08-15', grade: 'A', organic: false, description: 'Fresh, firm hybrid tomatoes picked twice a week. Great for restaurants and daily-supply retailers.', location: 'Fatehpur, Sikar', farmerId: 'f4', posted: '2026-08-17' },
  { id: 'c5', name: 'Cumin (Jeera)', category: 'Spices', images: ['https://images.unsplash.com/photo-1615485925873-b3d4b6b4c6d3?w=800&q=80','https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80'], quantity: 300, unit: 'kg', price: 340, minPrice: 310, harvestDate: '2026-03-01', grade: 'A', organic: false, description: 'Bold, aromatic jeera from the Marwar belt. Machine-cleaned, packed in food-grade bags.', location: 'Bilara, Jodhpur', farmerId: 'f6', posted: '2026-08-05' },
  { id: 'c6', name: 'Moong (Green Gram)', category: 'Pulses', images: ['https://images.unsplash.com/photo-1596097635121-14b63b7a0c17?w=800&q=80','https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=800&q=80'], quantity: 600, unit: 'kg', price: 92, minPrice: 85, harvestDate: '2026-08-02', grade: 'B', organic: false, description: 'Bold, uniform moong grains, sun-dried and cleaned, ready for direct mandi supply.', location: 'Nokha, Bikaner', farmerId: 'f5', posted: '2026-08-09' },
  { id: 'c7', name: 'Coriander (Dhaniya)', category: 'Spices', images: ['https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=80','https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80'], quantity: 250, unit: 'kg', price: 145, minPrice: 130, harvestDate: '2026-03-18', grade: 'B', organic: false, description: 'Fragrant whole coriander seed, ideal for spice traders. Available in 40 kg bags.', location: 'Ramganjmandi, Kota', farmerId: 'f3', posted: '2026-08-11' },
  { id: 'c8', name: 'Groundnut', category: 'Oilseeds', images: ['https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80','https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=800&q=80'], quantity: 900, unit: 'kg', price: 68, minPrice: 60, harvestDate: '2026-08-08', grade: 'A', organic: true, description: 'Bold Java-variety groundnuts, hand-picked and shade-dried using organic compost.', location: 'Fatehpur, Sikar', farmerId: 'f4', posted: '2026-08-16' },
];

const orders = [
  { id: 'ord1', cropId: 'c4', buyerId: 'b3', farmerId: 'f4', quantity: 150, price: 20, total: 3000, status: 'In Transit', payment: 'Processing', location: 'Hiran Magri, Udaipur',
    timeline: ['Requested', 'Confirmed', 'Transport Requested', 'Transport Assigned', 'Picked Up', 'In Transit'] },
  { id: 'ord2', cropId: 'c1', buyerId: 'b1', farmerId: 'f1', quantity: 200, price: 27.5, total: 5500, status: 'Confirmed', payment: 'Pending', location: 'Vidhyadhar Nagar, Jaipur',
    timeline: ['Requested', 'Confirmed'] },
  { id: 'ord3', cropId: 'c8', buyerId: 'b1', farmerId: 'f4', quantity: 400, price: 66, total: 26400, status: 'Completed', payment: 'Paid', location: 'Malviya Nagar, Jaipur',
    timeline: ['Requested', 'Confirmed', 'Transport Requested', 'Transport Assigned', 'Picked Up', 'In Transit', 'Delivered', 'Completed'] },
];
const ALL_STATUSES = ['Requested', 'Confirmed', 'Transport Requested', 'Transport Assigned', 'Picked Up', 'In Transit', 'Delivered', 'Completed'];

const offers = [
  { id: 'o1', cropId: 'c1', buyerId: 'b1', farmerId: 'f1', quantity: 200, offerPrice: 27.5, status: 'Countered', message: 'Need Grade A wheat, trial order of 200kg.' },
  { id: 'o2', cropId: 'c3', buyerId: 'b2', farmerId: 'f2', quantity: 1000, offerPrice: 16, status: 'Pending', message: 'Bulk order for retail chain, weekly repeat possible.' },
  { id: 'o3', cropId: 'c4', buyerId: 'b3', farmerId: 'f4', quantity: 150, offerPrice: 20, status: 'Accepted', message: 'For our restaurant, need daily-fresh tomatoes.' },
];

const transportRequestsData = [
  { id: 'tr1', pickup: 'Chomu, Jaipur', delivery: 'Vidhyadhar Nagar, Jaipur', crop: 'Wheat', quantity: '200 kg', vehicle: 'Pickup', date: '2026-08-26', distance: 28, cost: 620 },
  { id: 'tr2', pickup: 'Mundawar, Alwar', delivery: 'Chandpole Market, Jaipur', crop: 'Onion', quantity: '1000 kg', vehicle: 'Mini Truck', date: '2026-08-21', distance: 112, cost: 2460 },
];

const notifications = [
  { title: 'New offer received', body: 'Anita Traders sent a counter-offer of ₹27.5/kg on your Wheat listing.', time: '2h ago' },
  { title: 'Order confirmed', body: 'Your order #ord2 has been confirmed by Rajesh Kumar.', time: '5h ago' },
  { title: 'Transport assigned', body: 'Om Sai Transport accepted your delivery request.', time: '1d ago' },
];

const marketPrices = [
  { crop: 'Wheat', min: 24, max: 29, trend: 'up' },
  { crop: 'Mustard', min: 50, max: 58, trend: 'flat' },
  { crop: 'Onion', min: 12, max: 20, trend: 'down' },
  { crop: 'Tomato', min: 16, max: 24, trend: 'up' },
  { crop: 'Cumin', min: 300, max: 355, trend: 'up' },
  { crop: 'Moong', min: 80, max: 95, trend: 'flat' },
  { crop: 'Coriander', min: 120, max: 148, trend: 'down' },
  { crop: 'Groundnut', min: 58, max: 70, trend: 'up' },
];

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Farmer, Jaipur', avatar: farmers[0].avatar, quote: 'I used to depend on a commission agent. Now I list my wheat myself and talk to buyers directly — better price, no waiting.' },
  { name: 'Anita Traders', role: 'Wholesaler, Jaipur', avatar: buyers[0].avatar, quote: 'We source onions and wheat every week now. The offer system makes negotiation transparent for both sides.' },
  { name: 'Mahesh Logistics', role: 'Transport Partner, Jaipur', avatar: transportProviders[0].avatar, quote: 'Steady delivery requests every week, and the estimated distance and payment are always clear upfront.' },
];

const faqs = [
  { q: 'How can I sell my crops?', a: 'Register as a Farmer, add your crop with quantity, price and photos, and buyers can start sending offers immediately.' },
  { q: 'How can buyers purchase crops?', a: 'Browse the marketplace, filter by crop or location, and send a purchase request or offer directly to the farmer.' },
  { q: 'How does transportation work?', a: 'Once an order is confirmed, either party can request transport. Verified providers accept the job and update delivery status.' },
  { q: 'Is FAM WHEEL free?', a: 'Creating an account and listing crops is free. Optional services may carry a small fee in the future.' },
  { q: 'How are farmers verified?', a: 'Farmers submit basic identity and farm details for review before receiving a Verified Farmer badge.' },
  { q: 'Can I negotiate prices?', a: 'Yes — buyers can make offers, and farmers can accept, reject, or counter with a new price.' },
];

const categoryIcons = { Grains: '🌾', Vegetables: '🥬', Fruits: '🍎', Pulses: '🫘', Oilseeds: '🌻', Spices: '🌶️' };

/* ---------------------------------------------------------------------- */
/* 2. UTILITIES                                                            */
/* ---------------------------------------------------------------------- */

function inr(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
function fmtDate(d) { return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); }
function byId(id, list) { return list.find((x) => x.id === id); }
function stars(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}
function trendIcon(t) { return t === 'up' ? '▲' : t === 'down' ? '▼' : '●'; }
function trendClass(t) { return t === 'up' ? 'trend-up' : t === 'down' ? 'trend-down' : 'trend-flat'; }

let favorites = new Set();

/* current mock session */
let currentUser = null; // { id, name, role, avatar }

/* ---------------------------------------------------------------------- */
/* 3. TOASTS                                                               */
/* ---------------------------------------------------------------------- */

function showToast(message, type = 'success') {
  let host = document.getElementById('toastHost');
  if (!host) {
    host = document.createElement('div');
    host.id = 'toastHost';
    host.style.cssText = 'position:fixed;bottom:76px;right:16px;left:16px;z-index:999;display:flex;flex-direction:column;gap:8px;max-width:360px;margin-left:auto;';
    document.body.appendChild(host);
  }
  const colors = { success: '#2E7D32', info: '#2E7D32', warning: '#F9A825' };
  const t = document.createElement('div');
  t.style.cssText = `background:#fff;border-left:4px solid ${colors[type]};box-shadow:var(--shadow-hover);border-radius:10px;padding:12px 16px;font-size:.87rem;animation:fadeUp .3s ease;`;
  t.textContent = message;
  host.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 3200);
}

/* ---------------------------------------------------------------------- */
/* 4. ROUTER                                                               */
/* ---------------------------------------------------------------------- */

function navigate(viewName) {
  const target = document.getElementById('view-' + viewName);
  if (!target) { navigate('404'); return; }
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('visible'));
  target.classList.add('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.classList.toggle('active', el.dataset.nav === viewName);
  });

  document.getElementById('mobileMenu').classList.remove('open-menu');
  document.getElementById('mobileMenu').style.display = 'none';
  document.getElementById('hamburgerBtn').setAttribute('aria-expanded', 'false');

  // lazy render heavy views
  if (viewName === 'marketplace') renderMarketplace();
  if (viewName === 'transport') renderTransportView();
  if (viewName === 'market-insights') renderMarketInsights();
  if (viewName === 'dashboard-farmer') renderFarmerDashboard('overview');
  if (viewName === 'dashboard-buyer') renderBuyerDashboard('overview');
  if (viewName === 'dashboard-transport') renderTransportDashboard('overview');
}

document.addEventListener('click', (e) => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) {
    e.preventDefault();
    const view = navEl.dataset.nav;
    if ((view === 'dashboard-farmer' || view === 'dashboard-buyer' || view === 'dashboard-transport') && !currentUser) {
      showToast('Please log in first.', 'warning');
      navigate('login');
      return;
    }
    navigate(view);
  }
});

/* ---------------------------------------------------------------------- */
/* 5. HOME RENDERERS                                                       */
/* ---------------------------------------------------------------------- */

function cropCardHTML(crop) {
  const farmer = byId(crop.farmerId, farmers);
  const isFav = favorites.has(crop.id);
  return `
  <div class="card card-hover crop-card">
    <div class="thumb">
      <img src="${crop.images[0]}" alt="${crop.name} crop for sale" loading="lazy" />
      <div class="thumb-badges">
        ${farmer.verified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
        ${crop.organic ? '<span class="badge badge-organic">Organic</span>' : ''}
      </div>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-fav="${crop.id}" aria-label="Save to favorites">♥</button>
    </div>
    <div class="body">
      <h3>${crop.name}</h3>
      <div class="price">${inr(crop.price)}<small>/${crop.unit}</small></div>
      <div class="crop-meta">
        <span>📦 ${crop.quantity} ${crop.unit}</span>
        <span>📍 ${crop.location.split(',')[1] ? crop.location.split(',')[0] : crop.location}</span>
        <span>🗓️ ${fmtDate(crop.harvestDate)}</span>
      </div>
      <div class="farmer-row">
        <img src="${farmer.avatar}" alt="${farmer.name}" />
        <span class="name">${farmer.name}</span>
        <span class="rating">★ ${farmer.rating}</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-outline btn-sm" data-view-crop="${crop.id}">View Details</button>
        <button class="btn btn-primary btn-sm" data-offer-crop="${crop.id}">Send Offer</button>
      </div>
    </div>
  </div>`;
}

function renderHome() {
  document.getElementById('featuredCropsGrid').innerHTML = crops.slice(0, 4).map(cropCardHTML).join('');

  const cats = [...new Set(crops.map((c) => c.category))];
  document.getElementById('categoryGrid').innerHTML = cats.map((cat) => `
    <button class="card card-hover" style="padding:26px;text-align:center;" data-cat-jump="${cat}">
      <div style="font-size:2rem;margin-bottom:10px;">${categoryIcons[cat] || '🌱'}</div>
      <div style="font-weight:700;">${cat}</div>
      <div class="muted" style="font-size:.78rem;margin-top:4px;">${crops.filter((c) => c.category === cat).length} listings</div>
    </button>`).join('');

  document.getElementById('topFarmersGrid').innerHTML = [...farmers].sort((a, b) => b.rating - a.rating).slice(0, 4).map((f) => `
    <div class="card card-hover person-card">
      <img src="${f.avatar}" alt="${f.name}" />
      <h3>${f.name}</h3>
      <div class="role">${f.location}</div>
      ${f.verified ? '<span class="badge badge-verified">✓ Verified Farmer</span>' : ''}
      <div class="person-stats">
        <div><b>★ ${f.rating}</b>Rating</div>
        <div><b>${f.yearsFarming}y</b>Farming</div>
      </div>
    </div>`).join('');

  document.getElementById('testimonialGrid').innerHTML = testimonials.map((t) => `
    <div class="card testimonial-card">
      <div class="stars">${stars(5)}</div>
      <p class="quote">"${t.quote}"</p>
      <div class="testimonial-who"><img src="${t.avatar}" alt="${t.name}" /><div><b style="font-size:.87rem;">${t.name}</b><div class="muted" style="font-size:.75rem;">${t.role}</div></div></div>
    </div>`).join('');

  document.getElementById('faqList').innerHTML = faqs.map((f, i) => `
    <div class="faq-item" data-faq="${i}">
      <div class="faq-q">${f.q}<span class="chev">⌄</span></div>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}

/* ---------------------------------------------------------------------- */
/* 6. MARKETPLACE                                                          */
/* ---------------------------------------------------------------------- */

let marketState = { search: '', category: '', priceMin: null, priceMax: null, location: '', organic: false, verified: false, sort: 'newest' };

function initMarketplaceFilters() {
  const cats = [...new Set(crops.map((c) => c.category))];
  document.getElementById('categoryFilters').innerHTML =
    `<button class="chip active" data-cat="">All</button>` +
    cats.map((c) => `<button class="chip" data-cat="${c}">${categoryIcons[c] || ''} ${c}</button>`).join('');

  const locs = [...new Set(crops.map((c) => c.location.split(',').pop().trim()))];
  const sel = document.getElementById('locationFilter');
  sel.innerHTML = `<option value="">All locations</option>` + locs.map((l) => `<option value="${l}">${l}</option>`).join('');
}

function renderMarketplace() {
  let list = crops.filter((c) => {
    const farmer = byId(c.farmerId, farmers);
    const q = marketState.search.toLowerCase();
    const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || farmer.name.toLowerCase().includes(q);
    const matchesCat = !marketState.category || c.category === marketState.category;
    const matchesMin = marketState.priceMin == null || c.price >= marketState.priceMin;
    const matchesMax = marketState.priceMax == null || c.price <= marketState.priceMax;
    const matchesLoc = !marketState.location || c.location.includes(marketState.location);
    const matchesOrganic = !marketState.organic || c.organic;
    const matchesVerified = !marketState.verified || farmer.verified;
    return matchesSearch && matchesCat && matchesMin && matchesMax && matchesLoc && matchesOrganic && matchesVerified;
  });

  if (marketState.sort === 'lowest') list.sort((a, b) => a.price - b.price);
  if (marketState.sort === 'highest') list.sort((a, b) => b.price - a.price);
  if (marketState.sort === 'newest') list.sort((a, b) => new Date(b.posted) - new Date(a.posted));
  if (marketState.sort === 'rating') list.sort((a, b) => byId(b.farmerId, farmers).rating - byId(a.farmerId, farmers).rating);

  document.getElementById('resultsCount').textContent = `${list.length} crop${list.length !== 1 ? 's' : ''} found`;
  const grid = document.getElementById('marketplaceGrid');
  const empty = document.getElementById('marketEmpty');
  if (list.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = list.map(cropCardHTML).join('');
  }
}

/* ---------------------------------------------------------------------- */
/* 7. CROP DETAIL PAGE                                                     */
/* ---------------------------------------------------------------------- */

function openCropDetail(cropId) {
  const crop = byId(cropId, crops);
  if (!crop) return;
  const farmer = byId(crop.farmerId, farmers);
  const html = `
  <div class="crop-detail-grid">
    <div>
      <div class="crop-gallery"><img id="mainGalleryImg" src="${crop.images[0]}" alt="${crop.name}" /></div>
      <div class="crop-thumbs">
        ${crop.images.map((img, i) => `<img src="${img}" class="${i === 0 ? 'active' : ''}" data-thumb="${img}" alt="${crop.name} photo ${i + 1}" />`).join('')}
      </div>
      <div class="map-box">📍 Approx. area: ${crop.location} — exact farm location shared after order confirmation</div>
    </div>
    <div>
      <span class="badge badge-grade">Grade ${crop.grade}</span>
      ${crop.organic ? '<span class="badge badge-organic">Organic</span>' : ''}
      <h2 class="mt-8">${crop.name}</h2>
      <div class="detail-price mt-8">${inr(crop.price)}<span style="font-size:1rem;font-weight:500;color:var(--ink-soft);"> /${crop.unit}</span></div>
      <p class="muted mt-16">${crop.description}</p>
      <div class="detail-meta-grid">
        <div class="meta-box"><div class="lbl">Available quantity</div><div class="val">${crop.quantity} ${crop.unit}</div></div>
        <div class="meta-box"><div class="lbl">Harvest date</div><div class="val">${fmtDate(crop.harvestDate)}</div></div>
        <div class="meta-box"><div class="lbl">Location</div><div class="val">${crop.location}</div></div>
        <div class="meta-box"><div class="lbl">Minimum price</div><div class="val">${inr(crop.minPrice)}/${crop.unit}</div></div>
      </div>
      <div class="farmer-panel">
        <img src="${farmer.avatar}" alt="${farmer.name}" />
        <div style="flex:1;">
          <b>${farmer.name}</b> ${farmer.verified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
          <div class="muted" style="font-size:.82rem;">${farmer.location} · ★ ${farmer.rating} (${farmer.reviews} reviews)</div>
        </div>
        <button class="btn btn-outline btn-sm" data-chat-with="${farmer.id}">💬 Chat</button>
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary" data-offer-crop="${crop.id}">Send Offer</button>
        <button class="btn btn-accent" data-buy-crop="${crop.id}">Buy Now</button>
        <button class="btn btn-outline" data-nav="transport">Request Transportation</button>
        <button class="fav-btn" style="position:static;" data-fav="${crop.id}">♥ ${favorites.has(crop.id) ? 'Saved' : 'Save'}</button>
      </div>
    </div>
  </div>`;
  document.getElementById('cropDetailContent').innerHTML = html;
  navigate('crop-detail');
}

/* ---------------------------------------------------------------------- */
/* 8. TRANSPORT VIEW                                                       */
/* ---------------------------------------------------------------------- */

function renderTransportView() {
  document.getElementById('transportGrid').innerHTML = transportProviders.map((t) => `
    <div class="card card-hover person-card">
      <img src="${t.avatar}" alt="${t.name}" />
      <h3>${t.name}</h3>
      <div class="role">${t.vehicleType} · ${t.capacity}</div>
      ${t.verified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
      <div class="person-stats">
        <div><b>★ ${t.rating}</b>Rating</div>
        <div><b>${t.deliveries}</b>Deliveries</div>
      </div>
      <div class="muted mt-8" style="font-size:.78rem;">Serves: ${t.serviceAreas.join(', ')}</div>
      <div class="muted" style="font-size:.78rem;">₹${t.pricePerKm}/km</div>
    </div>`).join('');

  document.getElementById('transportRequestGrid').innerHTML = transportRequestsData.map((r) => `
    <div class="card" style="padding:20px;">
      <div class="row-flex" style="justify-content:space-between;"><b>${r.crop}</b><span class="badge badge-status">${r.vehicle}</span></div>
      <p class="muted mt-8" style="font-size:.85rem;">📍 ${r.pickup} → ${r.delivery}</p>
      <p class="muted" style="font-size:.85rem;">📦 ${r.quantity} · 🗓️ ${fmtDate(r.date)}</p>
      <div class="row-flex mt-16" style="justify-content:space-between;">
        <span class="muted" style="font-size:.78rem;">Est. ${r.distance} km · Est. ${inr(r.cost)}</span>
        <button class="btn btn-primary btn-sm" data-accept-job="${r.id}">Accept Job</button>
      </div>
    </div>`).join('');
}

/* ---------------------------------------------------------------------- */
/* 9. MARKET INSIGHTS                                                      */
/* ---------------------------------------------------------------------- */

function renderMarketInsights() {
  document.getElementById('marketPriceTable').innerHTML = marketPrices.map((p) => `
    <tr>
      <td><b>${p.crop}</b></td>
      <td>₹${p.min} – ₹${p.max}/kg</td>
      <td class="${trendClass(p.trend)}">${trendIcon(p.trend)} ${p.trend}</td>
    </tr>`).join('');
}

/* ---------------------------------------------------------------------- */
/* 10. AUTH (MOCK)                                                         */
/* ---------------------------------------------------------------------- */

function mockUserForRole(role) {
  if (role === 'farmer') return { id: farmers[0].id, name: farmers[0].name, role: 'farmer', avatar: farmers[0].avatar };
  if (role === 'buyer') return { id: buyers[0].id, name: buyers[0].name, role: 'buyer', avatar: buyers[0].avatar };
  return { id: transportProviders[0].id, name: transportProviders[0].name, role: 'transport', avatar: transportProviders[0].avatar };
}

function applyLoginState() {
  const loggedOut = document.getElementById('loggedOutActions');
  const loggedIn = document.getElementById('loggedInActions');
  const bottomDash = document.getElementById('bottomNavDash');
  if (currentUser) {
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'flex';
    document.getElementById('userChipAvatar').src = currentUser.avatar;
    document.getElementById('userChipName').textContent = currentUser.name.split(' ')[0];
    bottomDash.setAttribute('data-nav', 'dashboard-' + currentUser.role);
  } else {
    loggedOut.style.display = 'flex';
    loggedIn.style.display = 'none';
    bottomDash.setAttribute('data-nav', 'login');
  }
}

function loginAs(role) {
  currentUser = mockUserForRole(role);
  localStorage.setItem('famwheel_user', JSON.stringify(currentUser));
  applyLoginState();
  showToast(`Welcome back, ${currentUser.name.split(' ')[0]}!`);
  navigate('dashboard-' + role);
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const idField = document.getElementById('loginId');
  const passField = document.getElementById('loginPass');
  let valid = true;
  if (!idField.value.trim()) { idField.parentElement.classList.add('invalid'); valid = false; } else idField.parentElement.classList.remove('invalid');
  if (!passField.value.trim()) { passField.parentElement.classList.add('invalid'); valid = false; } else passField.parentElement.classList.remove('invalid');
  if (!valid) return;
  const role = document.querySelector('#loginRoleSelect .role-opt.active').dataset.role;
  loginAs(role);
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const pass = document.getElementById('regPass');
  if (pass.value.trim().length < 6) { pass.parentElement.classList.add('invalid'); return; }
  pass.parentElement.classList.remove('invalid');
  const role = document.querySelector('#registerRoleSelect .role-opt.active').dataset.role;
  const name = document.getElementById('regName').value.trim() || 'New User';
  currentUser = { id: 'new1', name, role, avatar: 'https://i.pravatar.cc/150?img=47' };
  localStorage.setItem('famwheel_user', JSON.stringify(currentUser));
  applyLoginState();
  showToast('Account created! Welcome to FAM WHEEL.');
  navigate('dashboard-' + role);
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  currentUser = null;
  localStorage.removeItem('famwheel_user');
  applyLoginState();
  showToast('You have been logged out.', 'info');
  navigate('home');
});

/* role selector pills (login/register/hero shortcuts) */
document.addEventListener('click', (e) => {
  const opt = e.target.closest('.role-opt');
  if (opt) {
    opt.parentElement.querySelectorAll('.role-opt').forEach((o) => o.classList.remove('active'));
    opt.classList.add('active');
  }
  const heroRoleBtn = e.target.closest('[data-role]');
  if (heroRoleBtn && heroRoleBtn.dataset.nav === 'register') {
    setTimeout(() => {
      const target = document.querySelector(`#registerRoleSelect .role-opt[data-role="${heroRoleBtn.dataset.role}"]`);
      if (target) { document.querySelectorAll('#registerRoleSelect .role-opt').forEach((o) => o.classList.remove('active')); target.classList.add('active'); }
    }, 0);
  }
});

/* ---------------------------------------------------------------------- */
/* 11. DASHBOARDS                                                          */
/* ---------------------------------------------------------------------- */

function statusBadgeColor(status) {
  if (status === 'Completed' || status === 'Delivered') return 'badge-verified';
  if (status === 'Rejected' || status === 'Cancelled') return 'badge-organic';
  return 'badge-status';
}

function orderRowsHTML(list) {
  if (!list.length) return `<tr><td colspan="5" class="muted text-center" style="padding:24px;">No orders yet.</td></tr>`;
  return list.map((o) => {
    const crop = byId(o.cropId, crops);
    return `<tr>
      <td><b>#${o.id}</b></td>
      <td>${crop.name} · ${o.quantity}${crop.unit}</td>
      <td>${inr(o.total)}</td>
      <td><span class="badge ${statusBadgeColor(o.status)}">${o.status}</span></td>
      <td><button class="btn btn-outline btn-sm" data-track-order="${o.id}">Track</button></td>
    </tr>`;
  }).join('');
}

function offerRowsHTML(list) {
  if (!list.length) return `<tr><td colspan="5" class="muted text-center" style="padding:24px;">No offers yet.</td></tr>`;
  return list.map((o) => {
    const crop = byId(o.cropId, crops);
    return `<tr>
      <td>${crop.name}</td>
      <td>${o.quantity} ${crop.unit}</td>
      <td>${inr(o.offerPrice)}/${crop.unit}</td>
      <td><span class="badge badge-status">${o.status}</span></td>
      <td>
        <button class="btn btn-primary btn-sm" data-offer-accept="${o.id}">Accept</button>
        <button class="btn btn-outline btn-sm" data-offer-reject="${o.id}">Reject</button>
      </td>
    </tr>`;
  }).join('');
}

function dashboardCardsHTML(cards) {
  return `<div class="dash-cards">${cards.map((c) => `
    <div class="dash-card"><div class="lbl">${c.label}</div><div class="num ${c.accent ? 'accent' : 'primary'}">${c.value}</div></div>`).join('')}</div>`;
}

/* -- Farmer dashboard -- */
function renderFarmerDashboard(tab) {
  document.getElementById('farmerDashAvatar').src = currentUser.avatar;
  document.getElementById('farmerDashName').textContent = currentUser.name;
  document.querySelectorAll('#farmerDashNav a').forEach((a) => a.classList.toggle('active', a.dataset.tab === tab));

  const myCrops = crops.filter((c) => c.farmerId === currentUser.id || c.farmerId === 'f1');
  const myOrders = orders.filter((o) => o.farmerId === currentUser.id || o.farmerId === 'f1');
  const myOffers = offers.filter((o) => o.farmerId === currentUser.id || o.farmerId === 'f1');
  const el = document.getElementById('farmerDashContent');

  if (tab === 'overview') {
    el.innerHTML = `
      <h2 class="mt-8" style="margin-bottom:20px;">Welcome back, ${currentUser.name.split(' ')[0]} 👋</h2>
      ${dashboardCardsHTML([
        { label: 'Total Listings', value: myCrops.length },
        { label: 'Active Listings', value: myCrops.length },
        { label: 'Pending Offers', value: myOffers.filter((o) => o.status === 'Pending').length, accent: true },
        { label: 'Total Sales', value: inr(farmers[0].totalSales) },
      ])}
      <div class="dash-panel">
        <div class="dash-panel-head"><h3>Recent orders</h3></div>
        <table class="table-simple"><thead><tr><th>Order</th><th>Crop</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>${orderRowsHTML(myOrders)}</tbody></table>
      </div>
      <div class="dash-panel">
        <div class="dash-panel-head"><h3>Notifications</h3></div>
        ${notifications.map((n) => `<div class="row-flex" style="align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid #f0f0f0;"><span style="font-size:1.1rem;">🔔</span><div><b style="font-size:.87rem;">${n.title}</b><p class="muted" style="font-size:.82rem;">${n.body}</p><span class="muted" style="font-size:.72rem;">${n.time}</span></div></div>`).join('')}
      </div>`;
  } else if (tab === 'crops') {
    el.innerHTML = `<div class="dash-panel-head"><h3>My Crops</h3><button class="btn btn-primary btn-sm" data-dash-tab-jump="add-crop">+ Add Crop</button></div><div class="grid-3">${myCrops.map(cropCardHTML).join('')}</div>`;
  } else if (tab === 'add-crop') {
    el.innerHTML = `
      <div class="dash-panel">
        <h3 class="mt-8" style="margin-bottom:18px;">Add a new crop listing</h3>
        <form id="addCropForm">
          <div class="grid-2">
            <div class="field"><label>Crop name</label><input required placeholder="e.g. Wheat" /></div>
            <div class="field"><label>Category</label><select><option>Grains</option><option>Vegetables</option><option>Fruits</option><option>Pulses</option><option>Oilseeds</option><option>Spices</option></select></div>
            <div class="field"><label>Quantity</label><input type="number" required placeholder="500" /></div>
            <div class="field"><label>Unit</label><select><option>kg</option><option>quintal</option><option>ton</option></select></div>
            <div class="field"><label>Expected price (₹)</label><input type="number" required placeholder="28" /></div>
            <div class="field"><label>Minimum price (₹)</label><input type="number" required placeholder="25" /></div>
            <div class="field"><label>Harvest date</label><input type="date" required /></div>
            <div class="field"><label>Available from</label><input type="date" required /></div>
            <div class="field"><label>Quality grade</label><select><option>A</option><option>B</option><option>C</option></select></div>
            <div class="field"><label>Organic?</label><select><option>No</option><option>Yes</option></select></div>
          </div>
          <div class="field"><label>Location</label><input required placeholder="Village, District" /></div>
          <div class="field"><label>Description</label><textarea rows="3" placeholder="Describe quality, storage, etc."></textarea></div>
          <div class="field"><label>Crop images</label><input type="file" multiple accept="image/*" /></div>
          <button class="btn btn-primary" type="submit">Publish Listing</button>
        </form>
      </div>`;
    document.getElementById('addCropForm').addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Crop listing published! (demo — not saved to a server)');
      renderFarmerDashboard('crops');
    });
  } else if (tab === 'orders') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">Orders</h3><table class="table-simple"><thead><tr><th>Order</th><th>Crop</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>${orderRowsHTML(myOrders)}</tbody></table></div>`;
  } else if (tab === 'offers') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">Offers received</h3><table class="table-simple"><thead><tr><th>Crop</th><th>Qty</th><th>Offer</th><th>Status</th><th>Action</th></tr></thead><tbody>${offerRowsHTML(myOffers)}</tbody></table></div>`;
  } else if (tab === 'messages') {
    el.innerHTML = chatShellHTML();
    wireChat();
  } else if (tab === 'transport') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">Request transportation</h3><p class="muted mt-8">Request a vehicle for your confirmed orders.</p><button class="btn btn-primary mt-16" data-nav="transport">Go to Transport →</button></div>`;
  } else if (tab === 'earnings') {
    el.innerHTML = `${dashboardCardsHTML([
      { label: 'Total Earnings', value: inr(farmers[0].totalSales) },
      { label: 'Pending Payments', value: inr(5500), accent: true },
      { label: 'Completed Orders', value: myOrders.filter((o) => o.status === 'Completed').length },
      { label: 'Avg. Order Value', value: inr(Math.round(myOrders.reduce((s, o) => s + o.total, 0) / (myOrders.length || 1))) },
    ])}<div class="dash-panel"><h3 style="margin-bottom:16px;">Payment history</h3><table class="table-simple"><thead><tr><th>Order</th><th>Amount</th><th>Payment status</th></tr></thead><tbody>${myOrders.map((o) => `<tr><td>#${o.id}</td><td>${inr(o.total)}</td><td><span class="badge badge-status">${o.payment}</span></td></tr>`).join('')}</tbody></table></div>`;
  } else if (tab === 'profile') {
    el.innerHTML = profilePanelHTML(farmers[0], 'farmer');
  }
}

/* -- Buyer dashboard -- */
function renderBuyerDashboard(tab) {
  document.getElementById('buyerDashAvatar').src = currentUser.avatar;
  document.getElementById('buyerDashName').textContent = currentUser.name;
  document.querySelectorAll('#buyerDashNav a').forEach((a) => a.classList.toggle('active', a.dataset.tab === tab));
  const myOrders = orders.filter((o) => o.buyerId === currentUser.id || o.buyerId === 'b1');
  const myOffers = offers.filter((o) => o.buyerId === currentUser.id || o.buyerId === 'b1');
  const el = document.getElementById('buyerDashContent');

  if (tab === 'overview') {
    el.innerHTML = `
      <h2 class="mt-8" style="margin-bottom:20px;">Welcome back, ${currentUser.name.split(' ')[0]} 👋</h2>
      ${dashboardCardsHTML([
        { label: 'Active Orders', value: myOrders.filter((o) => o.status !== 'Completed').length },
        { label: 'Pending Requests', value: myOffers.filter((o) => o.status === 'Pending').length, accent: true },
        { label: 'Total Purchases', value: myOrders.length },
        { label: 'Saved Crops', value: favorites.size },
      ])}
      <div class="dash-panel"><div class="dash-panel-head"><h3>Recent orders</h3></div><table class="table-simple"><thead><tr><th>Order</th><th>Crop</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>${orderRowsHTML(myOrders)}</tbody></table></div>`;
  } else if (tab === 'marketplace') {
    navigate('marketplace');
  } else if (tab === 'orders') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">My Orders</h3><table class="table-simple"><thead><tr><th>Order</th><th>Crop</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>${orderRowsHTML(myOrders)}</tbody></table></div>`;
  } else if (tab === 'offers') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">My Offers</h3><table class="table-simple"><thead><tr><th>Crop</th><th>Qty</th><th>Offer</th><th>Status</th></tr></thead><tbody>${myOffers.map((o) => { const crop = byId(o.cropId, crops); return `<tr><td>${crop.name}</td><td>${o.quantity} ${crop.unit}</td><td>${inr(o.offerPrice)}</td><td><span class="badge badge-status">${o.status}</span></td></tr>`; }).join('')}</tbody></table></div>`;
  } else if (tab === 'messages') {
    el.innerHTML = chatShellHTML(); wireChat();
  } else if (tab === 'favorites') {
    const favCrops = crops.filter((c) => favorites.has(c.id));
    el.innerHTML = favCrops.length
      ? `<h3 class="mt-8" style="margin-bottom:16px;">Saved crops</h3><div class="grid-3">${favCrops.map(cropCardHTML).join('')}</div>`
      : `<div class="empty-state"><div class="ic">❤️</div><h3>No favorites yet</h3><p>Save crops from the marketplace to see them here.</p><button class="btn btn-primary" data-nav="marketplace">Browse Marketplace</button></div>`;
  } else if (tab === 'transport') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">Request transportation</h3><button class="btn btn-primary mt-16" data-nav="transport">Go to Transport →</button></div>`;
  } else if (tab === 'profile') {
    el.innerHTML = profilePanelHTML(buyers[0], 'buyer');
  }
}

/* -- Transport dashboard -- */
function renderTransportDashboard(tab) {
  document.getElementById('transportDashAvatar').src = currentUser.avatar;
  document.getElementById('transportDashName').textContent = currentUser.name;
  document.querySelectorAll('#transportDashNav a').forEach((a) => a.classList.toggle('active', a.dataset.tab === tab));
  const el = document.getElementById('transportDashContent');
  const provider = transportProviders[0];

  if (tab === 'overview') {
    el.innerHTML = `
      <h2 class="mt-8" style="margin-bottom:20px;">Welcome back, ${currentUser.name.split(' ')[0]} 👋</h2>
      ${dashboardCardsHTML([
        { label: 'Available Jobs', value: transportRequestsData.length },
        { label: 'Active Deliveries', value: 1, accent: true },
        { label: 'Completed Deliveries', value: provider.deliveries },
        { label: 'Total Earnings', value: inr(provider.deliveries * provider.pricePerKm * 30) },
      ])}
      <div class="dash-panel"><h3 style="margin-bottom:16px;">Available jobs</h3><div class="grid-3">${transportRequestsData.map((r) => `
        <div class="card" style="padding:18px;"><b>${r.crop}</b><p class="muted mt-8" style="font-size:.85rem;">📍 ${r.pickup} → ${r.delivery}</p><p class="muted" style="font-size:.85rem;">📦 ${r.quantity} · 🗓️ ${fmtDate(r.date)}</p><div class="row-flex mt-16" style="justify-content:space-between;"><span class="muted" style="font-size:.78rem;">${inr(r.cost)} est.</span><button class="btn btn-primary btn-sm" data-accept-job="${r.id}">Accept</button></div></div>`).join('')}</div></div>`;
  } else if (tab === 'jobs') {
    renderTransportDashboard('overview');
  } else if (tab === 'active') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">Active delivery</h3><table class="table-simple"><thead><tr><th>Order</th><th>Crop</th><th>Route</th><th>Status</th><th></th></tr></thead><tbody><tr><td>#ord1</td><td>Tomato</td><td>Fatehpur → Udaipur</td><td><span class="badge badge-status">In Transit</span></td><td><button class="btn btn-outline btn-sm" data-update-delivery="ord1">Update Status</button></td></tr></tbody></table></div>`;
  } else if (tab === 'completed') {
    el.innerHTML = `<div class="dash-panel"><h3 class="mt-8" style="margin-bottom:16px;">Completed deliveries</h3><table class="table-simple"><thead><tr><th>Order</th><th>Crop</th><th>Route</th><th>Payment</th></tr></thead><tbody><tr><td>#ord3</td><td>Groundnut</td><td>Sikar → Jaipur</td><td><span class="badge badge-verified">Paid</span></td></tr></tbody></table></div>`;
  } else if (tab === 'earnings') {
    el.innerHTML = dashboardCardsHTML([
      { label: 'Total Earnings', value: inr(provider.deliveries * provider.pricePerKm * 30) },
      { label: 'This Month', value: inr(12400), accent: true },
      { label: 'Completed Jobs', value: provider.deliveries },
      { label: 'Rating', value: '★ ' + provider.rating },
    ]);
  } else if (tab === 'profile') {
    el.innerHTML = profilePanelHTML(provider, 'transport');
  }
}

function profilePanelHTML(person, role) {
  return `<div class="dash-panel">
    <div class="row-flex" style="gap:16px;margin-bottom:20px;">
      <img src="${person.avatar}" alt="${person.name}" style="width:72px;height:72px;border-radius:50%;object-fit:cover;" />
      <div><h3>${person.name}</h3><p class="muted">${person.location}</p>${person.verified ? '<span class="badge badge-verified">✓ Verified</span>' : '<span class="badge badge-status">Pending verification</span>'}</div>
    </div>
    <div class="grid-3">
      <div class="meta-box"><div class="lbl">Rating</div><div class="val">★ ${person.rating}</div></div>
      ${role === 'farmer' ? `<div class="meta-box"><div class="lbl">Years farming</div><div class="val">${person.yearsFarming}</div></div><div class="meta-box"><div class="lbl">Main crops</div><div class="val">${person.mainCrops.join(', ')}</div></div>` : ''}
      ${role === 'buyer' ? `<div class="meta-box"><div class="lbl">Business</div><div class="val">${person.businessName}</div></div><div class="meta-box"><div class="lbl">Buyer type</div><div class="val">${person.buyerType}</div></div>` : ''}
      ${role === 'transport' ? `<div class="meta-box"><div class="lbl">Vehicle</div><div class="val">${person.vehicleType}</div></div><div class="meta-box"><div class="lbl">Capacity</div><div class="val">${person.capacity}</div></div>` : ''}
    </div>
    <button class="btn btn-outline mt-24" id="editProfileBtn">Edit Profile</button>
  </div>`;
}

/* -- Shared chat shell -- */
const chatConversations = [
  { id: 'conv1', name: 'Anita Traders', avatar: buyers[0].avatar, preview: 'Can you do 27.5 per kg for the full lot?', messages: [
    { from: 'them', text: 'Namaste, is the Sharbati wheat still available?', time: '10:01 AM' },
    { from: 'me', text: 'Yes, 500kg ready for dispatch.', time: '10:05 AM' },
    { from: 'them', text: 'My offer is ₹26/kg for 200kg as a trial.', time: '10:10 AM' },
    { from: 'me', text: 'Quality is Grade A this season, I can do ₹27.5/kg.', time: '10:18 AM' },
    { from: 'them', text: 'Can you do 27.5 per kg for the full lot?', time: '10:24 AM' },
  ]},
  { id: 'conv2', name: 'Vikram Singh', avatar: buyers[1].avatar, preview: 'Yes, 1000kg available from Monday.', messages: [
    { from: 'them', text: 'Do you have onion stock ready?', time: 'Yesterday' },
    { from: 'me', text: 'Yes, 1000kg available from Monday.', time: 'Yesterday' },
  ]},
];

function chatShellHTML() {
  return `<div class="chat-shell">
    <div class="chat-list" id="chatList">
      ${chatConversations.map((c, i) => `<div class="chat-list-item ${i === 0 ? 'active' : ''}" data-conv="${c.id}"><img src="${c.avatar}" alt="${c.name}" /><div class="meta"><div class="name">${c.name}</div><div class="preview">${c.preview}</div></div></div>`).join('')}
    </div>
    <div class="chat-window">
      <div class="chat-header" id="chatHeader"></div>
      <div class="chat-body" id="chatBody"></div>
      <form class="chat-input" id="chatInputForm"><input id="chatInputText" placeholder="Type a message..." autocomplete="off" /><button class="btn btn-primary btn-sm" type="submit">Send</button></form>
    </div>
  </div>`;
}

function wireChat() {
  let activeConv = chatConversations[0];
  function renderConv() {
    document.getElementById('chatHeader').innerHTML = `<img src="${activeConv.avatar}" alt="${activeConv.name}" /><b>${activeConv.name}</b>`;
    document.getElementById('chatBody').innerHTML = activeConv.messages.map((m) => `<div class="msg ${m.from === 'me' ? 'out' : 'in'}">${m.text}<span class="time">${m.time}</span></div>`).join('');
    document.getElementById('chatBody').scrollTop = 9999;
  }
  renderConv();
  document.querySelectorAll('#chatList .chat-list-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('#chatList .chat-list-item').forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
      activeConv = chatConversations.find((c) => c.id === item.dataset.conv);
      renderConv();
    });
  });
  document.getElementById('chatInputForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('chatInputText');
    if (!input.value.trim()) return;
    activeConv.messages.push({ from: 'me', text: input.value.trim(), time: 'Now' });
    input.value = '';
    renderConv();
  });
}
document.addEventListener('click', (e) => {
  // favorites
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    const id = favBtn.dataset.fav;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    favBtn.classList.toggle('active');
    showToast(favorites.has(id) ? 'Added to favorites.' : 'Removed from favorites.', 'info');
  }

  // view crop details
  const viewCropBtn = e.target.closest('[data-view-crop]');
  if (viewCropBtn) openCropDetail(viewCropBtn.dataset.viewCrop);

  // category quick jump from homepage
  const catJump = e.target.closest('[data-cat-jump]');
  if (catJump) {
    navigate('marketplace');
    setTimeout(() => {
      marketState.category = catJump.dataset.catJump;
      document.querySelectorAll('#categoryFilters .chip').forEach((c) => c.classList.toggle('active', c.dataset.cat === marketState.category));
      renderMarketplace();
    }, 50);
  }

  // send offer (demo modal via prompt-free inline confirm)
  const offerBtn = e.target.closest('[data-offer-crop]');
  if (offerBtn) {
    if (!currentUser) { showToast('Please log in to send an offer.', 'warning'); navigate('login'); return; }
    showToast('Offer sent to the farmer! Track it under Offers in your dashboard.');
  }

  const buyBtn = e.target.closest('[data-buy-crop]');
  if (buyBtn) {
    if (!currentUser) { showToast('Please log in to place an order.', 'warning'); navigate('login'); return; }
    showToast('Purchase request sent! The farmer will confirm shortly.');
  }

  const chatBtn = e.target.closest('[data-chat-with]');
  if (chatBtn) {
    if (!currentUser) { showToast('Please log in to chat.', 'warning'); navigate('login'); return; }
    showToast('Opening conversation...', 'info');
    navigate('dashboard-' + currentUser.role);
    setTimeout(() => {
      if (currentUser.role === 'farmer') renderFarmerDashboard('messages');
      else if (currentUser.role === 'buyer') renderBuyerDashboard('messages');
    }, 50);
  }

  // accept transport job
  const acceptJob = e.target.closest('[data-accept-job]');
  if (acceptJob) { showToast('Job accepted! Check Active Deliveries in your dashboard.'); }

  const updateDelivery = e.target.closest('[data-update-delivery]');
  if (updateDelivery) { showToast('Delivery status updated to "Delivered".'); }

  // offer accept/reject
  const offerAccept = e.target.closest('[data-offer-accept]');
  if (offerAccept) { showToast('Offer accepted. Order has been created.'); }
  const offerReject = e.target.closest('[data-offer-reject]');
  if (offerReject) { showToast('Offer rejected.', 'info'); }

  // track order -> show a quick timeline toast panel
  const trackBtn = e.target.closest('[data-track-order]');
  if (trackBtn) openOrderTimeline(trackBtn.dataset.trackOrder);

  // faq accordion
  const faqQ = e.target.closest('.faq-item .faq-q');
  if (faqQ) faqQ.closest('.faq-item').classList.toggle('open');

  const dashTab = e.target.closest('[data-tab]');
  if (dashTab) {
    e.preventDefault();
    const parentNav = dashTab.closest('.dash-nav');
    if (parentNav.id === 'farmerDashNav') renderFarmerDashboard(dashTab.dataset.tab);
    if (parentNav.id === 'buyerDashNav') renderBuyerDashboard(dashTab.dataset.tab);
    if (parentNav.id === 'transportDashNav') renderTransportDashboard(dashTab.dataset.tab);
  }
  const dashJump = e.target.closest('[data-dash-tab-jump]');
  if (dashJump) renderFarmerDashboard(dashJump.dataset.dashTabJump);

  const thumb = e.target.closest('[data-thumb]');
  if (thumb) {
    document.getElementById('mainGalleryImg').src = thumb.dataset.thumb;
    thumb.parentElement.querySelectorAll('img').forEach((i) => i.classList.remove('active'));
    thumb.classList.add('active');
  }
  const chip = e.target.closest('#categoryFilters .chip');
  if (chip) {
    document.querySelectorAll('#categoryFilters .chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    marketState.category = chip.dataset.cat;
    renderMarketplace();
  }

  const clearFilters = e.target.closest('#clearFiltersBtn, #emptyClearBtn');
  if (clearFilters) {
    marketState = { search: '', category: '', priceMin: null, priceMax: null, location: '', organic: false, verified: false, sort: 'newest' };
    document.getElementById('marketSearch').value = '';
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    document.getElementById('locationFilter').value = '';
    document.getElementById('organicFilter').checked = false;
    document.getElementById('verifiedFilter').checked = false;
    document.querySelectorAll('#categoryFilters .chip').forEach((c) => c.classList.toggle('active', c.dataset.cat === ''));
    renderMarketplace();
  }
  if (e.target.closest('#openTransportRequestBtn')) showToast('Transport request form would open here (connect to backend to enable).', 'info');
  if (e.target.closest('#openVehicleRegisterBtn')) showToast('Vehicle registration form would open here (connect to backend to enable).', 'info');
});

function openOrderTimeline(orderId) {
  const order = byId(orderId, orders);
  if (!order) return;
  const crop = byId(order.cropId, crops);
  const stepsHTML = ALL_STATUSES.map((s) => {
    const idx = ALL_STATUSES.indexOf(s);
    const doneIdx = ALL_STATUSES.indexOf(order.timeline[order.timeline.length - 1]);
    const done = idx <= doneIdx;
    const current = idx === doneIdx;
    return `<div class="timeline-step ${done ? 'done' : ''} ${current ? 'current' : ''}"><div class="timeline-dot">${done ? '✓' : ''}</div><div class="timeline-content"><div class="t">${s}</div></div></div>`;
  }).join('');

  let overlay = document.getElementById('orderTimelineOverlay');
  if (overlay) overlay.remove();
  overlay = document.createElement('div');
  overlay.id = 'orderTimelineOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(27,27,27,0.45);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;';
  overlay.innerHTML = `<div style="background:#fff;border-radius:20px;max-width:420px;width:100%;padding:26px;max-height:85vh;overflow-y:auto;">
    <div class="row-flex" style="justify-content:space-between;margin-bottom:16px;"><h3>Order #${order.id}</h3><button id="closeTimelineBtn" style="font-size:1.3rem;">&times;</button></div>
    <p class="muted" style="margin-bottom:16px;">${crop.name} · ${order.quantity}${crop.unit} · ${inr(order.total)}</p>
    <div class="timeline">${stepsHTML}</div>
  </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay || e.target.id === 'closeTimelineBtn') overlay.remove(); });
}
document.getElementById('marketSearch')?.addEventListener('input', (e) => { marketState.search = e.target.value; renderMarketplace(); });
document.getElementById('priceMin')?.addEventListener('input', (e) => { marketState.priceMin = e.target.value ? Number(e.target.value) : null; renderMarketplace(); });
document.getElementById('priceMax')?.addEventListener('input', (e) => { marketState.priceMax = e.target.value ? Number(e.target.value) : null; renderMarketplace(); });
document.getElementById('locationFilter')?.addEventListener('change', (e) => { marketState.location = e.target.value; renderMarketplace(); });
document.getElementById('organicFilter')?.addEventListener('change', (e) => { marketState.organic = e.target.checked; renderMarketplace(); });
document.getElementById('verifiedFilter')?.addEventListener('change', (e) => { marketState.verified = e.target.checked; renderMarketplace(); });
document.getElementById('sortSelect')?.addEventListener('change', (e) => { marketState.sort = e.target.value; renderMarketplace(); });

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Message sent! We will get back to you soon.');
  e.target.reset();
});

/* mobile menu toggle */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = isOpen ? 'none' : 'flex';
  hamburgerBtn.setAttribute('aria-expanded', String(!isOpen));
});

document.getElementById('langSelect').addEventListener('change', (e) => {
  showToast(e.target.value === 'hi' ? 'हिंदी भाषा जल्द ही उपलब्ध होगी।' : 'Language switched to English.', 'info');
});

(function init() {
  const stored = localStorage.getItem('famwheel_user');
  if (stored) currentUser = JSON.parse(stored);
  applyLoginState();
  renderHome();
  initMarketplaceFilters();
  navigate('home');
})();

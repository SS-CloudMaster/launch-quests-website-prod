// All page content for Launch Quests website

// Function to inject pages into DOM
function loadAllPages() {
  console.log('Loading all pages...');
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  // Digital Marketing Page
  const digitalMarketingPage = `
    <div id="page-digital-marketing" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16 reveal">
              <div class="text-sm font-bold text-[var(--accent)] mb-4">DIGITAL MARKETING</div>
              <h1 class="text-5xl md:text-6xl font-bold mb-6">Digital Marketing That Drives <span class="gradient-text">Real Revenue</span></h1>
              <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">SEO, Paid Ads, Social Media, Email Automation - All integrated for maximum ROI</p>
            </div>
            
            <img src="our_services_img/2.png" alt="SEO Optimization" class="w-full h-96 object-cover rounded-xl mb-16 reveal">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div class="glass rounded-xl p-8 reveal">
                <img src="https://pplx-res.cloudinary.com/image/upload/v1756113959/pplx_project_search_images/da0e078bf8e7bdd59fdc7881a0de43289ba96736.png" alt="SEO" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">🎯 SEO Optimization</h3>
                <p class="text-[var(--text-secondary)] mb-4">Rank #1 on Google for high-intent keywords in your niche. Comprehensive keyword research, on-page optimization, and technical SEO.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Keyword research & strategy</li>
                  <li>✓ On-page & technical SEO</li>
                  <li>✓ Link building campaigns</li>
                  <li>✓ Local SEO optimization</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <img src="https://pplx-res.cloudinary.com/image/upload/v1754741713/pplx_project_search_images/1d8da61b215a12eda0f4ea052197d691ce6c5e0e.png" alt="Paid Ads" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">💰 Paid Ads Management</h3>
                <p class="text-[var(--text-secondary)] mb-4">ROI-focused campaigns on Google, Meta, and LinkedIn. We manage budgets from ₹20K to ₹5L+ monthly.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Google Ads (Search & Display)</li>
                  <li>✓ Facebook & Instagram Ads</li>
                  <li>✓ LinkedIn Ads for B2B</li>
                  <li>✓ Retargeting campaigns</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <img src="https://pplx-res.cloudinary.com/image/upload/v1756013182/pplx_project_search_images/c96d70bc99fcad77a268574cfa9876792576d465.png" alt="Social Media" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">📱 Social Media Strategy</h3>
                <p class="text-[var(--text-secondary)] mb-4">Build authority and engage your ideal clients across all major platforms with consistent, valuable content.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Content calendar planning</li>
                  <li>✓ Community management</li>
                  <li>✓ Influencer partnerships</li>
                  <li>✓ Performance analytics</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <img src="https://pplx-res.cloudinary.com/image/upload/v1762153579/pplx_project_search_images/69cd696731d6ce930465e837d6b17ad8ecb13c30.png" alt="Email Automation" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">✉️ Email Automation</h3>
                <p class="text-[var(--text-secondary)] mb-4">Nurture leads with personalized sequences that convert. Average open rate of 40%+ and 15%+ conversion.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Welcome series automation</li>
                  <li>✓ Lead nurture sequences</li>
                  <li>✓ Re-engagement campaigns</li>
                  <li>✓ A/B testing & optimization</li>
                </ul>
              </div>
            </div>
            
            <div class="glass rounded-xl p-12 mb-16 reveal">
              <h2 class="text-3xl font-bold mb-6 text-center">How It Works</h2>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h4 class="font-bold mb-2">Discovery Call</h4>
                  <p class="text-sm text-[var(--text-secondary)]">Understand your business, goals, and target audience</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h4 class="font-bold mb-2">Strategy Development</h4>
                  <p class="text-sm text-[var(--text-secondary)]">Create custom marketing plan with clear KPIs</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h4 class="font-bold mb-2">Implementation</h4>
                  <p class="text-sm text-[var(--text-secondary)]">Launch campaigns across all channels</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                  <h4 class="font-bold mb-2">Optimize & Scale</h4>
                  <p class="text-sm text-[var(--text-secondary)]">Continuous testing and improvement for maximum ROI</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-xl p-12 text-center text-white mb-16 reveal">
              <h2 class="text-3xl font-bold mb-4">Clients see 200%+ lead increase on average</h2>
              <p class="text-xl mb-6">Within the first 6 months of working with us</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div class="text-4xl font-bold mb-2">175%</div>
                  <p>Avg. Traffic Growth</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">4.5x</div>
                  <p>ROI on Ad Spend</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">40%+</div>
                  <p>Email Open Rate</p>
                </div>
              </div>
            </div>
            
            <div class="text-center reveal">
              <h2 class="text-3xl font-bold mb-8">Ready to Launch Your Digital Marketing?</h2>
              <p class="text-xl text-[var(--text-secondary)] mb-8">Starting at ₹20K/month</p>
              <button class="btn-primary text-lg px-8 py-4 nav-link" data-page="contact">Get Started Today →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', digitalMarketingPage);
  
  // Web Development Page
  const webDevPage = `
    <div id="page-web-development" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16 reveal">
              <div class="text-sm font-bold text-[var(--accent)] mb-4">WEB DEVELOPMENT</div>
              <h1 class="text-5xl md:text-6xl font-bold mb-6">Websites That Convert <span class="gradient-text">Visitors Into Customers</span></h1>
              <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Fast, Secure, Conversion-Optimized Business Websites & E-Commerce Platforms</p>
            </div>
            
            <img src="our_services_img/1.png" alt="Web Development Dashboard" class="w-full h-96 object-cover rounded-xl mb-16 reveal">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">💻</div>
                <h3 class="text-2xl font-bold mb-3">Business Websites</h3>
                <p class="text-[var(--text-secondary)] mb-4">Modern, professional websites that establish credibility and convert visitors. Mobile-first, fast-loading, SEO-optimized.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Responsive design (mobile, tablet, desktop)</li>
                  <li>✓ Custom design matching your brand</li>
                  <li>✓ Contact forms & lead capture</li>
                  <li>✓ CMS integration for easy updates</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">🛒</div>
                <h3 class="text-2xl font-bold mb-3">E-Commerce Platforms</h3>
                <p class="text-[var(--text-secondary)] mb-4">Complete online stores with payment processing, inventory management, and order tracking.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Product catalog & search</li>
                  <li>✓ Secure payment gateway integration</li>
                  <li>✓ Shopping cart & checkout optimization</li>
                  <li>✓ Multi-vendor marketplace support</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">🎯</div>
                <h3 class="text-2xl font-bold mb-3">Landing Pages</h3>
                <p class="text-[var(--text-secondary)] mb-4">High-converting pages designed for specific campaigns. A/B tested for maximum performance.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Conversion-focused design</li>
                  <li>✓ Fast loading speed (<2 seconds)</li>
                  <li>✓ Lead capture forms</li>
                  <li>✓ Analytics integration</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">⚙️</div>
                <h3 class="text-2xl font-bold mb-3">CMS Setup</h3>
                <p class="text-[var(--text-secondary)] mb-4">Easy content management without coding knowledge. Update content, add pages, manage media.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ WordPress, Webflow, or custom CMS</li>
                  <li>✓ Training & documentation</li>
                  <li>✓ Plugin setup & optimization</li>
                  <li>✓ Ongoing maintenance support</li>
                </ul>
              </div>
            </div>
            
            <div class="glass rounded-xl p-12 mb-16 reveal">
              <h2 class="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center">
                  <div class="text-4xl mb-2">⚛️</div>
                  <p class="font-semibold">React / Next.js</p>
                </div>
                <div class="text-center">
                  <div class="text-4xl mb-2">👍</div>
                  <p class="font-semibold">Node.js</p>
                </div>
                <div class="text-center">
                  <div class="text-4xl mb-2">🌐</div>
                  <p class="font-semibold">WordPress</p>
                </div>
                <div class="text-center">
                  <div class="text-4xl mb-2">🛡️</div>
                  <p class="font-semibold">Security First</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-xl p-12 text-center text-white mb-16 reveal">
              <h2 class="text-3xl font-bold mb-4">Average 95+ PageSpeed Score</h2>
              <p class="text-xl mb-6">Lightning-fast websites that rank higher and convert better</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div class="text-4xl font-bold mb-2"><2s</div>
                  <p>Load Time</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">99.9%</div>
                  <p>Uptime</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">100%</div>
                  <p>Mobile Optimized</p>
                </div>
              </div>
            </div>
            
            <div class="text-center reveal">
              <h2 class="text-3xl font-bold mb-8">Get Your Website Built</h2>
              <p class="text-xl text-[var(--text-secondary)] mb-8">Projects starting from ₹40K</p>
              <button class="btn-primary text-lg px-8 py-4 nav-link" data-page="contact">Request a Quote →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', webDevPage);
  
  // IT Infrastructure Page
  const itInfraPage = `
    <div id="page-it-infrastructure" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16 reveal">
              <div class="text-sm font-bold text-[var(--accent)] mb-4">IT SOLUTIONS</div>
              <h1 class="text-5xl md:text-6xl font-bold mb-6">Enterprise-Grade <span class="gradient-text">IT Infrastructure & Security</span></h1>
              <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Server Setup, Firewall Configuration, CI/CD Pipelines, 24/7 Support</p>
            </div>
            
            <img src="our_services_img/4.png" alt="IT Infrastructure Security" class="w-full h-96 object-cover rounded-xl mb-16 reveal">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div class="glass rounded-xl p-8 reveal">
                <img src="our_services_img/4.png" alt="Server Setup" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">🖥️ Server Setup & Hosting</h3>
                <p class="text-[var(--text-secondary)] mb-4">Reliable cloud hosting with automated backups, load balancing, and disaster recovery.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ AWS / Azure / Google Cloud setup</li>
                  <li>✓ Auto-scaling configuration</li>
                  <li>✓ Daily automated backups</li>
                  <li>✓ 99.9% uptime SLA</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">🛡️</div>
                <h3 class="text-2xl font-bold mb-3">Firewall Configuration</h3>
                <p class="text-[var(--text-secondary)] mb-4">Enterprise-grade security to protect your data from threats and unauthorized access.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Firewall setup & monitoring</li>
                  <li>✓ DDoS protection</li>
                  <li>✓ SSL/TLS certificates</li>
                  <li>✓ Security audits & compliance</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">♻️</div>
                <h3 class="text-2xl font-bold mb-3">CI/CD Pipelines</h3>
                <p class="text-[var(--text-secondary)] mb-4">Automate deployments and testing to ship code faster with confidence.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Automated testing integration</li>
                  <li>✓ Zero-downtime deployments</li>
                  <li>✓ Git workflow optimization</li>
                  <li>✓ Docker & Kubernetes setup</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">📞</div>
                <h3 class="text-2xl font-bold mb-3">24/7 Support & Monitoring</h3>
                <p class="text-[var(--text-secondary)] mb-4">Round-the-clock monitoring with instant alerts and rapid incident response.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Real-time system monitoring</li>
                  <li>✓ Performance optimization</li>
                  <li>✓ Incident response (15-min SLA)</li>
                  <li>✓ Monthly reports & recommendations</li>
                </ul>
              </div>
            </div>
            
            <div class="glass rounded-xl p-12 mb-16 reveal">
              <h2 class="text-3xl font-bold mb-8 text-center">Security Features</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div class="text-3xl mb-2">🔒</div>
                  <p class="font-semibold">SSL/TLS</p>
                </div>
                <div>
                  <div class="text-3xl mb-2">🛡️</div>
                  <p class="font-semibold">DDoS Protection</p>
                </div>
                <div>
                  <div class="text-3xl mb-2">📊</div>
                  <p class="font-semibold">Monitoring</p>
                </div>
                <div>
                  <div class="text-3xl mb-2">✅</div>
                  <p class="font-semibold">Compliance</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-xl p-12 text-center text-white mb-16 reveal">
              <h2 class="text-3xl font-bold mb-4">99.9% Uptime SLA</h2>
              <p class="text-xl mb-6">Your systems stay online, always</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div class="text-4xl font-bold mb-2">15min</div>
                  <p>Response Time</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">24/7</div>
                  <p>Monitoring</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">100%</div>
                  <p>Data Backed Up</p>
                </div>
              </div>
            </div>
            
            <div class="text-center reveal">
              <h2 class="text-3xl font-bold mb-8">Secure Your Infrastructure</h2>
              <p class="text-xl text-[var(--text-secondary)] mb-8">Enterprise plans from ₹60K/month</p>
              <button class="btn-primary text-lg px-8 py-4 nav-link" data-page="contact">Get Started →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', itInfraPage);
  
  // CRM Solutions Page
  const crmPage = `
    <div id="page-crm-solutions" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16 reveal">
              <div class="text-sm font-bold text-[var(--accent)] mb-4">CRM SOLUTIONS</div>
              <h1 class="text-5xl md:text-6xl font-bold mb-6">Custom CRM & Automation <span class="gradient-text">That Scales With You</span></h1>
              <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">WhatsApp Integration, Lead Nurture Automation, Analytics Dashboard</p>
            </div>
            
            <img src="our_services_img/3.png" alt="CRM Workflow" class="w-full h-96 object-cover rounded-xl mb-16 reveal">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div class="glass rounded-xl p-8 reveal">
                <img src="our_services_img/3.png" alt="Custom CRM" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">📊 Custom CRM Build</h3>
                <p class="text-[var(--text-secondary)] mb-4">Tailored CRM system designed for your specific sales process and workflow needs.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Custom fields & pipelines</li>
                  <li>✓ Lead scoring & routing</li>
                  <li>✓ Activity tracking & notes</li>
                  <li>✓ Team collaboration tools</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <img src="https://pplx-res.cloudinary.com/image/upload/v1755203813/pplx_project_search_images/a7892660b1bee1a26f43e145fa0ba4e76d1292c4.png" alt="WhatsApp Integration" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">📱 WhatsApp Integration</h3>
                <p class="text-[var(--text-secondary)] mb-4">Instant lead qualification and customer communication via WhatsApp Business API.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Automated chatbot responses</li>
                  <li>✓ Lead capture from WhatsApp</li>
                  <li>✓ Broadcast messaging</li>
                  <li>✓ Two-way conversation sync</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <div class="text-5xl mb-4">⚙️</div>
                <h3 class="text-2xl font-bold mb-3">Lead Automation</h3>
                <p class="text-[var(--text-secondary)] mb-4">Automated nurture sequences that move leads through your pipeline automatically.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Email drip campaigns</li>
                  <li>✓ Follow-up task automation</li>
                  <li>✓ Deal stage triggers</li>
                  <li>✓ Smart reminders & notifications</li>
                </ul>
              </div>
              
              <div class="glass rounded-xl p-8 reveal">
                <img src="https://pplx-res.cloudinary.com/image/upload/v1754741713/pplx_project_search_images/1d8da61b215a12eda0f4ea052197d691ce6c5e0e.png" alt="Analytics Dashboard" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-3">📊 Analytics Dashboard</h3>
                <p class="text-[var(--text-secondary)] mb-4">Real-time insights into your sales pipeline, team performance, and revenue forecasts.</p>
                <ul class="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>✓ Pipeline analytics</li>
                  <li>✓ Team performance metrics</li>
                  <li>✓ Revenue forecasting</li>
                  <li>✓ Custom reports & exports</li>
                </ul>
              </div>
            </div>
            
            <div class="glass rounded-xl p-12 mb-16 reveal">
              <h2 class="text-3xl font-bold mb-8 text-center">Integration Capabilities</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div class="text-3xl mb-2">📧</div>
                  <p class="font-semibold">Email Platforms</p>
                </div>
                <div>
                  <div class="text-3xl mb-2">📱</div>
                  <p class="font-semibold">WhatsApp</p>
                </div>
                <div>
                  <div class="text-3xl mb-2">📊</div>
                  <p class="font-semibold">Analytics Tools</p>
                </div>
                <div>
                  <div class="text-3xl mb-2">⚡</div>
                  <p class="font-semibold">Zapier</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-xl p-12 text-center text-white mb-16 reveal">
              <h2 class="text-3xl font-bold mb-4">10+ CRM Deployments, 3x Lead Conversion</h2>
              <p class="text-xl mb-6">Our clients close more deals with less manual work</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div class="text-4xl font-bold mb-2">3x</div>
                  <p>Lead Conversion</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">50%</div>
                  <p>Time Saved</p>
                </div>
                <div>
                  <div class="text-4xl font-bold mb-2">38%</div>
                  <p>Higher Close Rate</p>
                </div>
              </div>
            </div>
            
            <div class="text-center reveal">
              <h2 class="text-3xl font-bold mb-8">Build Your CRM Today</h2>
              <p class="text-xl text-[var(--text-secondary)] mb-8">Custom CRM projects from ₹80K</p>
              <button class="btn-primary text-lg px-8 py-4 nav-link" data-page="contact">Get Started →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', crmPage);
  
  // Case Studies Page
  const caseStudiesPage = `
    <div id="page-case-studies" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 reveal">
            <div class="text-sm font-bold text-[var(--accent)] mb-4">CASE STUDIES</div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Real Results for <span class="gradient-text">Real Businesses</span></h1>
            <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">See how we've helped businesses like yours scale and succeed</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="glass rounded-xl overflow-hidden card-hover reveal case-study-card cursor-pointer" data-case-id="1">
              <img src="https://pplx-res.cloudinary.com/image/upload/v1754970983/pplx_project_search_images/5bf519cca00acce9628179e011da2e586b210de2.png" alt="Healthcare Case Study" class="w-full h-48 object-cover">
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Healthcare</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Healthcare Clinic - Lead Generation</h3>
                <p class="text-sm text-[var(--text-secondary)] mb-3">MediCare Plus Clinic</p>
                <div class="text-3xl font-bold gradient-text mb-4">+175% Patient Leads</div>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Implemented targeted Facebook ads + WhatsApp lead qualification system</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Digital Marketing</span>
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">WhatsApp Automation</span>
                </div>
                <button class="btn-secondary text-sm w-full">View Full Story →</button>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal case-study-card cursor-pointer" data-case-id="2">
              <img src="https://pplx-res.cloudinary.com/image/upload/v1754741713/pplx_project_search_images/1d8da61b215a12eda0f4ea052197d691ce6c5e0e.png" alt="E-Commerce Case Study" class="w-full h-48 object-cover">
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">E-Commerce</span>
                <h3 class="text-xl font-bold mt-4 mb-2">E-Commerce Store - Revenue Growth</h3>
                <p class="text-sm text-[var(--text-secondary)] mb-3">StyleHub E-Store</p>
                <div class="text-3xl font-bold gradient-text mb-4">+₹45L Annual Revenue</div>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Rebuilt platform with conversion optimization + Google Shopping ads</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Web Development</span>
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Digital Marketing</span>
                </div>
                <button class="btn-secondary text-sm w-full">View Full Story →</button>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal case-study-card cursor-pointer" data-case-id="3">
              <img src="https://pplx-res.cloudinary.com/image/upload/v1755106066/pplx_project_search_images/2f850982e541dc44f41e7f110adf788f46e07052.png" alt="Real Estate Case Study" class="w-full h-48 object-cover">
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Real Estate</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Real Estate Agency - Deal Closure</h3>
                <p class="text-sm text-[var(--text-secondary)] mb-3">Prime Properties Real Estate</p>
                <div class="text-3xl font-bold gradient-text mb-4">+38% Deal Closure Rate</div>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Custom CRM with lead scoring + automated follow-up sequences</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">CRM Solutions</span>
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Email Automation</span>
                </div>
                <button class="btn-secondary text-sm w-full">View Full Story →</button>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal case-study-card cursor-pointer" data-case-id="4">
              <img src="https://pplx-res.cloudinary.com/image/upload/v1754741713/pplx_project_search_images/1d8da61b215a12eda0f4ea052197d691ce6c5e0e.png" alt="SaaS Case Study" class="w-full h-48 object-cover">
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">SaaS</span>
                <h3 class="text-xl font-bold mt-4 mb-2">SaaS Startup - User Acquisition</h3>
                <p class="text-sm text-[var(--text-secondary)] mb-3">CloudScale SaaS</p>
                <div class="text-3xl font-bold gradient-text mb-4">10x Customer Growth</div>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">SEO optimization + conversion-focused landing pages + retargeting</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Digital Marketing</span>
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Landing Pages</span>
                </div>
                <button class="btn-secondary text-sm w-full">View Full Story →</button>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal case-study-card cursor-pointer" data-case-id="5">
              <img src="https://pplx-res.cloudinary.com/image/upload/v1762153579/pplx_project_search_images/69cd696731d6ce930465e837d6b17ad8ecb13c30.png" alt="Consulting Case Study" class="w-full h-48 object-cover">
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Consulting</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Consulting Firm - Client Retention</h3>
                <p class="text-sm text-[var(--text-secondary)] mb-3">Strategic Insights Consulting</p>
                <div class="text-3xl font-bold gradient-text mb-4">+92% Client Retention</div>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Customer success automation + regular engagement sequences</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Email Automation</span>
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">CRM Solutions</span>
                </div>
                <button class="btn-secondary text-sm w-full">View Full Story →</button>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal case-study-card cursor-pointer" data-case-id="6">
              <img src="https://pplx-res.cloudinary.com/image/upload/v1754741713/pplx_project_search_images/1d8da61b215a12eda0f4ea052197d691ce6c5e0e.png" alt="Agency Case Study" class="w-full h-48 object-cover">
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Agency</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Digital Agency - Operations Automation</h3>
                <p class="text-sm text-[var(--text-secondary)] mb-3">Creative Minds Agency</p>
                <div class="text-3xl font-bold gradient-text mb-4">50% Time Saved on Admin</div>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Automated client reporting + DevOps CI/CD pipeline implementation</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">IT Infrastructure</span>
                  <span class="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Workflow Automation</span>
                </div>
                <button class="btn-secondary text-sm w-full">View Full Story →</button>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-16 reveal">
            <h2 class="text-3xl font-bold mb-6">Ready for similar results?</h2>
            <button class="btn-primary text-lg px-8 py-4 nav-link" data-page="contact">Start Your Project →</button>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', caseStudiesPage);
  
  // Pricing Page
  const pricingPage = `
    <div id="page-pricing" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 reveal">
            <div class="text-sm font-bold text-[var(--accent)] mb-4">PRICING & PACKAGES</div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Choose the Plan That <span class="gradient-text">Fits Your Growth Stage</span></h1>
            <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Transparent pricing with no hidden fees. 30-day money-back guarantee.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div class="glass rounded-xl p-8 card-hover reveal">
              <h3 class="text-2xl font-bold mb-2">Starter</h3>
              <p class="text-[var(--text-secondary)] mb-4">Perfect for growing businesses</p>
              <div class="mb-6">
                <span class="text-4xl font-bold">₹20,000</span>
                <span class="text-[var(--text-secondary)]">/month</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Digital Marketing: SEO + Social Media</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>1 Landing Page or Website Update</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Email Automation Setup</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Weekly Performance Reports</span>
                </li>
              </ul>
              <button class="btn-secondary w-full text-center block nav-link" data-page="contact">Get This Plan</button>
            </div>
            
            <div class="glass rounded-xl p-8 card-hover reveal relative border-2 border-[var(--accent)]">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--accent)] text-[#0a0e27] px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 class="text-2xl font-bold mb-2">Growth</h3>
              <p class="text-[var(--text-secondary)] mb-4">Most popular for scaling</p>
              <div class="mb-6">
                <span class="text-4xl font-bold">₹50,000</span>
                <span class="text-[var(--text-secondary)]">/month</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>All Starter Features</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Paid Ads Management (Google + Meta)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Custom CRM Development</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <button class="btn-primary w-full text-center block nav-link" data-page="contact">Get This Plan</button>
            </div>
            
            <div class="glass rounded-xl p-8 card-hover reveal">
              <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
              <p class="text-[var(--text-secondary)] mb-4">Full-service scaling partner</p>
              <div class="mb-6">
                <span class="text-4xl font-bold">₹1,00,000+</span>
                <span class="text-[var(--text-secondary)]">/month</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>All Growth Features</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>IT Infrastructure & DevOps</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Multi-Channel Marketing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[var(--accent)] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>24/7 Support & On-Call</span>
                </li>
              </ul>
              <button class="btn-secondary w-full text-center block nav-link" data-page="contact">Get This Plan</button>
            </div>
          </div>
          
          <div class="text-center reveal">
            <p class="text-[var(--text-secondary)] mb-4">💰 30-Day Money Back Guarantee • 🔒 No Long-Term Contracts</p>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', pricingPage);
  
  // About Page
  const aboutPage = `
    <div id="page-about" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 reveal">
            <div class="text-sm font-bold text-[var(--accent)] mb-4">ABOUT US</div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Building Digital <span class="gradient-text">Success Stories</span></h1>
            <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Helping 100+ Indian businesses scale to ₹1Cr ARR by 2026</p>
          </div>
          
          <div class="max-w-4xl mx-auto mb-16">
            <div class="glass rounded-xl p-8 md:p-12 reveal">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="w-32 h-32 bg-gradient-to-br from-[var(--accent)] to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold text-white flex-shrink-0">LQ</div>
                <div>
                  <h3 class="text-2xl font-bold mb-4">Our Story</h3>
                  <p class="text-[var(--text-secondary)] mb-4">Launch Quests began as a small bootstrapped idea—to help Indian businesses grow through smart, reliable technology. From building our first website to offering complete software, IT, and digital marketing solutions, our journey has been driven by transparency, innovation, and real results.</p>
                  <p class="text-[var(--text-secondary)]">Today, we partner with startups and corporates across India, helping them run smoother, scale faster, and embrace digital transformation with confidence. And as we expand into HR, accounting, and corporate services, our mission remains the same: to empower 100+ Indian businesses with a strong, future-ready digital ecosystem</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mb-16">
            <h3 class="text-3xl font-bold text-center mb-12 reveal">Our Values</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div class="glass rounded-xl p-8 text-center reveal">
                <div class="text-5xl mb-4">💡</div>
                <h4 class="text-xl font-bold mb-2">Innovation</h4>
                <p class="text-[var(--text-secondary)]">Staying ahead with cutting-edge solutions and strategies</p>
              </div>
              <div class="glass rounded-xl p-8 text-center reveal">
                <div class="text-5xl mb-4">🔍</div>
                <h4 class="text-xl font-bold mb-2">Transparency</h4>
                <p class="text-[var(--text-secondary)]">Clear communication, honest reporting, no hidden fees</p>
              </div>
              <div class="glass rounded-xl p-8 text-center reveal">
                <div class="text-5xl mb-4">🎯</div>
                <h4 class="text-xl font-bold mb-2">Results</h4>
                <p class="text-[var(--text-secondary)]">ROI-focused approach backed by data and proven methods</p>
              </div>
            </div>
          </div>
          
          <div class="glass rounded-xl p-8 max-w-4xl mx-auto reveal">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div class="text-3xl font-bold gradient-text mb-2">1+ Years</div>
                <p class="text-[var(--text-secondary)]">In Business</p>
              </div>
              <div>
                <div class="text-3xl font-bold gradient-text mb-2">10+ Projects</div>
                <p class="text-[var(--text-secondary)]">Completed</p>
              </div>
              <div>
                <div class="text-3xl font-bold gradient-text mb-2">95% Satisfaction</div>
                <p class="text-[var(--text-secondary)]">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', aboutPage);
  
  // Blog Page
  const blogPage = `
    <div id="page-blog" class="page-content hidden">
      <section class="min-h-screen pt-32 pb-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 reveal">
            <div class="text-sm font-bold text-[var(--accent)] mb-4">BLOG & INSIGHTS</div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Learn, Grow, and <span class="gradient-text">Scale Your Business</span></h1>
            <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Expert insights on digital marketing, tech, and scaling strategies</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div class="glass rounded-xl overflow-hidden card-hover reveal">
              <div class="h-48 relative flex items-center justify-center text-6xl bg-cover bg-center"
                style="background-image: url('img/CRM.png');">
              <div class="absolute inset-0 bg-black/40"></div>
              </div>
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">CRM Guides</span>
                <h3 class="text-xl font-bold mt-4 mb-2">5 CRM Mistakes Costing You ₹10L Per Year</h3>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Learn the common CRM implementation mistakes that Indian agencies make and how to avoid them.</p>
                <div class="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>5 min read</span>
                  <button class="btn-secondary text-sm py-2 px-4">Read More</button>
                </div>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal">
              <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-6xl">📱</div>
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Digital Marketing</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Google Ads ROI in 2025: What's Changed</h3>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Updated strategies for maximizing ad spend and reducing cost-per-lead in the new algorithm era.</p>
                <div class="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>7 min read</span>
                  <button class="btn-secondary text-sm py-2 px-4">Read More</button>
                </div>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal">
              <div class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-6xl">🚀</div>
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Growth Tips</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Scaling to ₹1Cr: The SOP Playbook</h3>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Step-by-step framework used by 50+ agencies to go from ₹30L to ₹1Cr monthly revenue.</p>
                <div class="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>12 min read</span>
                  <button class="btn-secondary text-sm py-2 px-4">Read More</button>
                </div>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal">
              <div class="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-6xl">💬</div>
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Tech Insights</span>
                <h3 class="text-xl font-bold mt-4 mb-2">WhatsApp Automation: From Leads to Customers</h3>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Complete guide to integrating WhatsApp automation in your sales funnel for instant qualification.</p>
                <div class="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>8 min read</span>
                  <button class="btn-secondary text-sm py-2 px-4">Read More</button>
                </div>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal">
              <div class="h-48 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-6xl">✉️</div>
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Email Marketing</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Email Sequences That Convert: Real Data</h3>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Proven email templates and sequences that generate 40%+ open rates and 15%+ conversion.</p>
                <div class="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>6 min read</span>
                  <button class="btn-secondary text-sm py-2 px-4">Read More</button>
                </div>
              </div>
            </div>
            
            <div class="glass rounded-xl overflow-hidden card-hover reveal">
              <div class="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-6xl">🎯</div>
              <div class="p-6">
                <span class="text-xs font-bold text-[var(--accent)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">Strategy</span>
                <h3 class="text-xl font-bold mt-4 mb-2">Niche Selection: The ₹30L Trap</h3>
                <p class="text-[var(--text-secondary)] mb-4 text-sm">Why most agencies stay stuck at ₹30L and how to choose the right niche to break through.</p>
                <div class="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>10 min read</span>
                  <button class="btn-secondary text-sm py-2 px-4">Read More</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="glass rounded-xl p-8 md:p-12 max-w-3xl mx-auto text-center reveal">
            <h3 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p class="text-[var(--text-secondary)] mb-6">Get weekly insights on scaling your business, marketing strategies, and tech automation.</p>
            <form class="flex flex-col md:flex-row gap-4 justify-center" id="newsletter-form-page">
              <input type="email" placeholder="Enter your email" class="px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none flex-1 max-w-md" required>
              <button type="submit" class="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `;
  appContent.insertAdjacentHTML('beforeend', blogPage);
  
  // Setup navigation after pages are loaded
  setTimeout(() => {
    if (typeof window.setupNavigation === 'function') {
      window.setupNavigation();
    }
  }, 100);
}

// Auto-load pages when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadAllPages);
} else {
  loadAllPages();
}
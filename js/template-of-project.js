// Array of projects data

const projects = [
    {
        id: 1,
        sector: "Luxury Villas",
        client: "Private Client",
        role: "Design & Build Contractor",
        title: "Luxury Townhouse Villa – Sheikh Zayed",
        mainImage: "../assets/id-1/villa-m.webp",
        gallery: ["../assets/id-1/villa-1.webp", "../assets/id-1/villa-2.webp", "../assets/id-1/villa-3.webp", "../assets/id-1/villa-4.webp"],
        location: "Sheikh Zayed, Egypt",
        date: "2025",
        description: `
        <div class="project-header">
            <h3>8-Month Architectural Masterpiece</h3>
            <div class="project-meta">
                <span class="location-badge">Sheikh Zayed</span>
                <span class="innovation-badge">Smart Living</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A 480m² luxury townhouse blending cutting-edge technology with sophisticated design, delivered in record time without compromising on quality standards.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <h4>480 m²</h4>
                <p>Built-up Area</p>
            </div>
            <div class="stat-box">
                <h4>8 Months</h4>
                <p>Completion Time</p>
            </div>
            <div class="stat-box">
                <h4>100%</h4>
                <p>Turnkey Solution</p>
            </div>
        </div>

        <div class="design-section">
            <h4><i class="fas fa-cube"></i> Design Innovation</h4>
            <div class="design-feature">
                <h5>3D Pre-Visualization</h5>
                <ul>
                    <li>BIM-enabled architectural planning</li>
                    <li>Virtual reality walkthroughs</li>
                    <li>Solar path analysis for optimal orientation</li>
                    <li>Material visualization technology</li>
                </ul>
            </div>
        </div>

        <div class="feature-grid">
            <div class="feature-card">
                <h5><i class="fas fa-thermometer-half"></i> Climate Control</h5>
                <ul>
                    <li>VRF central air conditioning</li>
                    <li>Zoned temperature management</li>
                    <li>Heat recovery ventilation</li>
                </ul>
            </div>
            <div class="feature-card">
                <h5><i class="fas fa-solar-panel"></i> Sustainability</h5>
                <ul>
                    <li>300L solar water heating system</li>
                    <li>Energy-efficient glazing</li>
                    <li>LED lighting throughout</li>
                </ul>
            </div>
            <div class="feature-card">
                <h5><i class="fas fa-network-wired"></i> Smart Systems</h5>
                <ul>
                    <li>KNX home automation</li>
                    <li>Structured cabling network</li>
                    <li>Integrated security system</li>
                </ul>
            </div>
        </div>

        <div class="material-specs">
            <h4><i class="fas fa-palette"></i> Material Selection</h4>
            <div class="specs-columns">
                <div>
                    <h5>Flooring</h5>
                    <ul>
                        <li>Italian marble (living areas)</li>
                        <li>Engineered oak (bedrooms)</li>
                    </ul>
                </div>
                <div>
                    <h5>Wall Finishes</h5>
                    <ul>
                        <li>Venetian plaster feature walls</li>
                        <li>Custom 3D wall panels</li>
                    </ul>
                </div>
                <div>
                    <h5>Exterior</h5>
                    <ul>
                        <li>Composite wood-look cladding</li>
                        <li>Thermal insulation system</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="location-benefits">
            <h4><i class="fas fa-map-marker-alt"></i> Location Advantages</h4>
            <ul>
                <li>500m from Sheikh Zayed business district</li>
                <li>Gated community with 24/7 security</li>
                <li>Proximity to international schools</li>
            </ul>
        </div>
    `,

    },
    {
        id: 2,
        sector: "Luxury Duplex",
        client: "Private Client",
        role: "Design & Build Contractor",
        title: "Luxury Duplex - Fifth Settlement, New Cairo",
        mainImage: "../assets/id-2/duplex-m.webp",
        gallery: ["../assets/id-2/duplex-1.webp", "../assets/id-2/duplex-2.webp", "../assets/id-2/duplex-3.webp", "../assets/id-2/duplex-4.webp"],
        location: "New Cairo, Egypt",
        date: "2024",
        description: `
        < div class= "project-overview" >
            <p>Heaven Life presents an architectural masterpiece in New Cairo's Fifth Settlement, redefining luxury living through innovative design and exceptional execution.</p>
        </div >

        <div class="project-highlights">
            <h4>Project Highlights:</h4>
            <ul>
                <li><strong>Completion:</strong> 2024</li>
            </ul>
        </div>

        <div class="key-features">
            <h4>Key Features:</h4>
            <ul>
                <li>Comprehensive 3D design with precision execution</li>
                <li>Premium interior/exterior finishes with luxury materials</li>
                <li>Spacious rooftop terrace with entertainment areas</li>
                <li>Modern open-concept living spaces</li>
                <li>Strategic location in Fifth Settlement</li>
            </ul>
        </div>

        <div class="project-achievement">
            <p>This project demonstrates Heaven Life's commitment to creating residential experiences that blend sophistication with functional design.</p>
        </div>`,

    },
    {
        id: 3,
        sector: "Landscape Design",
        client: "Private Client",
        role: "Design & Build Contractor",
        title: "Premium Landscape Qattamiya Gardens",
        mainImage: "../assets/id-3/land-m.webp",
        gallery: ["../assets/id-3/land-1.webp", "../assets/id-3/land-2.webp", "../assets/id-3/land-3.webp", "../assets/id-3/land-4.webp"],
        location: "Katameya Gardens, Cairo",
        date: "2024",
        description: `
        <div class="project-header">
            <h3>3-Month Luxury Landscape Transformation</h3>
            <div class="project-meta">
                <span class="location-badge">New Cairo</span>
                <span class="sustainability-badge">Eco-Conscious</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A 300m² premium outdoor living space featuring innovative water features, smart lighting, and hybrid vegetation, completed Q1 2024.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <h4>300 m²</h4>
                <p>Total Area</p>
            </div>
            <div class="stat-box">
                <h4>12 Weeks</h4>
                <p>Completion Time</p>
            </div>
            <div class="stat-box">
                <h4>60/40</h4>
                <p>Natural/Artificial Greenery</p>
            </div>
        </div>

        <div class="design-section">
            <h4><i class="fas fa-project-diagram"></i> Digital Planning</h4>
            <div class="design-feature">
                <ul>
                    <li><strong>2D Technical Drawings:</strong> AutoCAD precision planning</li>
                    <li><strong>3D Visualization:</strong> Lumion real-time rendering</li>
                    <li><strong>VR Walkthroughs:</strong> Client immersion pre-construction</li>
                    <li><strong>Solar Studies:</strong> Optimal light pattern planning</li>
                </ul>
            </div>
        </div>

        <div class="feature-grid">
            <div class="feature-card">
                <h5><i class="fas fa-swimming-pool"></i> Aquatic Features</h5>
                <ul>
                    <li>8m × 4m infinity-edge pool</li>
                    <li>Natural stone waterfall with flow control</li>
                    <li>Integrated jacuzzi zone</li>
                    <li>Saltwater purification system</li>
                </ul>
            </div>
            <div class="feature-card">
                <h5><i class="fas fa-lightbulb"></i> Lighting System</h5>
                <ul>
                    <li>DALI-controlled LED pathways</li>
                    <li>Underwater color-changing lights</li>
                    <li>Moonlight-effect tree uplighting</li>
                    <li>Motion-activated security lighting</li>
                </ul>
            </div>
            <div class="feature-card">
                <h5><i class="fas fa-leaf"></i> Botanical Elements</h5>
                <ul>
                    <li>Drought-resistant native species (60%)</li>
                    <li>UV-stabilized artificial greenery (40%)</li>
                    <li>Emerald Zoysia natural turf</li>
                    <li>Automated drip irrigation</li>
                </ul>
            </div>
        </div>

        <div class="technical-section">
            <h4><i class="fas fa-cogs"></i> Technical Specifications</h4>
            <div class="spec-grid">
                <div class="spec-card">
                    <h5>Hardscaping</h5>
                    <ul>
                        <li>Honed limestone paving</li>
                        <li>Reinforced concrete substructure</li>
                        <li>Permeable gravel pathways</li>
                    </ul>
                </div>
                <div class="spec-card">
                    <h5>Water Systems</h5>
                    <ul>
                        <li>Variable-speed pool pump</li>
                        <li>Rainwater harvesting</li>
                        <li>Smart moisture sensors</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="sustainability-section">
            <h4><i class="fas fa-seedling"></i> Sustainable Features</h4>
            <ul>
                <li>Solar-powered water features</li>
                <li>Native plant conservation</li>
                <li>Smart water management</li>
                <li>LED energy-efficient lighting</li>
            </ul>
        </div>
    `,

    },
    {
        id: 4,
        sector: "Commercial",
        client: "Private Client",
        role: "Lead Design & 3D Planning Consultant",
        title: "Palza Mall Design Project, New Cairo",
        mainImage: "../assets/id-4/shopping-m.webp",
        gallery: ["../assets/id-4/shopping-1.webp", "../assets/id-4/shopping-2.webp", "../assets/id-4/shopping-3.webp", "../assets/id-4/shopping-4.webp"],
        location: "Cairo, Egypt",
        date: "2024",
        description: `
        <div class="project-overview">
            <p>Heaven Life has completed the comprehensive design and 3D planning for one of Egypt's largest commercial malls (1,500 m² GBA), creating an integrated retail and entertainment destination serving 25,000+ daily visitors.</p>
        </div>

        <div class="project-specs">
            <h4>Project Specifications:</h4>
            <ul>
                <li><strong>Total Area:</strong> 1,500 m²</li>
                <li><strong>Capacity:</strong> 1,000+ daily visitors</li>
                <li><strong>Design Period:</strong> 6 months</li>
                <li><strong>Retail Units:</strong> 50+ stores</li>
                <li><strong>Floors:</strong> 2 levels</li>
                <li><strong>Parking:</strong> 100 vehicles</li>
            </ul>
        </div>

        <div class="design-highlights">
            <h4>Design Highlights:</h4>
            <ul>
                <li><strong>Architectural Design:</strong> Contemporary facade with optimized visitor flow patterns</li>
                <li><strong>Space Allocation:</strong> 
                    <ul class="sub-list">
                        <li>65% Retail (250+ stores)</li>
                        <li>20% F&B (50 outlets)</li>
                        <li>15% Entertainment (Cinema, Family Zone)</li>
                    </ul>
                </li>
                <li><strong>3D Visualization:</strong> Full BIM implementation (Revit + 3Ds Max)</li>
                <li><strong>Sustainability:</strong> LEED Gold targeted certification</li>
                <li><strong>Technology:</strong> Smart mall solutions including:
                    <ul class="sub-list">
                        <li>Digital wayfinding</li>
                        <li>Automated parking system</li>
                        <li>AI-powered crowd management</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="technical-details">
            <h4>Technical Specifications:</h4>
            <ul>
                <li><strong>Circulation:</strong> 8m wide main corridors + 6 escalators + 12 elevators</li>
                <li><strong>Lighting:</strong> LED ecosystem with circadian rhythm technology</li>
                <li><strong>Materials:</strong> Composite panels + structural glazing facade system</li>
            </ul>
        </div>

        <div class="project-impact">
            <p>This landmark project demonstrates Heaven Life's capability to deliver world-class commercial spaces that combine operational efficiency with exceptional visitor experiences, setting new standards for retail developments in Egypt.</p>
        </div>
    `,

    },
    {
        id: 5,
        sector: "Residential",
        client: "Private Client",
        role: "Design & Build Contractor",
        title: "Luxury Apartment - Promenade Compound",
        mainImage: "../assets/id-5/Promenade-m.webp",
        gallery: ["../assets/id-5/Promenade-1.webp", "../assets/id-5/Promenade-2.webp", "../assets/id-5/Promenade-3.webp", "../assets/id-5/Promenade-4.webp"],
        location: "Promenade Compound, New Cairo",
        date: "2023",
        description: `
        <div class="project-overview">
            <p>A premium residential project completed within 3 months, combining meticulous 2D/3D planning with high-end execution to deliver a turnkey luxury apartment.</p>
        </div>

        <div class="project-specs">
            <h4>Project Specifications:</h4>
            <ul>
                <li><strong>Area:</strong> 120 m² (3BR)</li>
                <li><strong>Completion Time:</strong> 3 months (Q1 2023)</li>
                <li><strong>Floors:</strong> 8th Floor in Tower B</li>
                <li><strong>View:</strong> Panoramic compound view</li>
            </ul>
        </div>

        <div class="design-process">
            <h4>Design & Planning:</h4>
            <ul>
                <li><strong>2D Planning:</strong> Detailed architectural drawings</li>
                <li><strong>3D Visualization:</strong> Full interactive walkthroughs</li>
                <li><strong>Software Used:</strong> AutoCAD, 3Ds Max, SketchUp</li>
            </ul>
        </div>

        <div class="execution-phases">
            <h4>Execution Phases:</h4>
            <ol>
                <li><strong>Structural Works:</strong> Precision plastering and surface preparation</li>
                <li><strong>MEP Systems:</strong>
                    <ul class="sub-list">
                        <li>Plumbing with Grohe fixtures</li>
                        <li>Electrical with Legrand solutions</li>
                        <li>HVAC with Daikin VRV system</li>
                    </ul>
                </li>
                <li><strong>Finishes:</strong>
                    <ul class="sub-list">
                        <li>Flooring: Italian marble & premium porcelain</li>
                        <li>Wall finishes: Custom paint & wall panels</li>
                        <li>Ceiling: Gypsum with LED cove lighting</li>
                    </ul>
                </li>
                <li><strong>Interior Package:</strong>
                    <ul class="sub-list">
                        <li>Modern furniture selection</li>
                        <li>Designer lighting fixtures</li>
                        <li>Smart home integration</li>
                    </ul>
                </li>
            </ol>
        </div>

        <div class="materials-branding">
            <h4>Premium Materials:</h4>
            <ul>
                <li><strong>Kitchen:</strong> SieMatic cabinets with Bosch appliances</li>
                <li><strong>Bathrooms:</strong> Duravit sanitaryware</li>
                <li><strong>Doors:</strong> Custom hardwood doors</li>
                <li><strong>Smart Home:</strong> Control4 automation system</li>
            </ul>
        </div>

        <div class="project-achievement">
            <p>This project demonstrates Heaven Life's capability to deliver luxury turnkey solutions within aggressive timelines without compromising quality.</p>
        </div>
    `,

    },
    {
        id: 6,
        sector: "Outdoor Living",
        client: "Private Client",
        role: "Design & Build Contractor",
        title: "Luxury Outdoor Living Space - First Settlement",
        mainImage: "../assets/id-6/living-m.webp",
        gallery: ["../assets/id-6/living-1.webp", "../assets/id-6/living-2.webp", "../assets/id-6/living-3.webp", "../assets/id-6/living-4.webp"],
        location: "First Settlement, New Cairo",
        date: "2023",
        description: `
        <div class="project-overview">
            <p>A premium outdoor transformation completed in just 7 days, blending contemporary design with natural elements to create a seamless indoor-outdoor living experience.</p>
        </div>

        <div class="project-specs">
            <h4>Project Specifications:</h4>
            <ul>
                <li><strong>Area:</strong> 50 m² covered outdoor space</li>
                <li><strong>Completion Time:</strong> 7 days (April 2023)</li>
                <li><strong>Location:</strong> First Settlement rooftop</li>
                <li><strong>Capacity:</strong> 7-12 persons</li>
            </ul>
        </div>

        <div class="design-features">
            <h4>Design Features:</h4>
            <ul>
                <li><strong>Glass Roof System:</strong> 10mm tempered glass with UV protection</li>
                <li><strong>Wall Composition:</strong>
                    <ul class="sub-list">
                        <li>Natural stone cladding (60%)</li>
                        <li>Artificial greenery panels (30%)</li>
                        <li>Composite wood finishes (10%)</li>
                    </ul>
                </li>
                <li><strong>Lighting System:</strong> 
                    <ul class="sub-list">
                        <li>LED ambient lighting</li>
                        <li>Dimmable spotlights</li>
                        <li>Decorative string lights</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="execution-details">
            <h4>Execution Highlights:</h4>
            <ol>
                <li><strong>Day 1-2:</strong> Site preparation & structural framework</li>
                <li><strong>Day 3-4:</strong> Glass roof installation & wall systems</li>
                <li><strong>Day 5:</strong> Electrical works & lighting</li>
                <li><strong>Day 6:</strong> Finishing touches & quality checks</li>
                <li><strong>Day 7:</strong> Final installation & client handover</li>
            </ol>
        </div>

        <div class="material-specs">
            <h4>Material Specifications:</h4>
            <ul>
                <li><strong>Flooring:</strong> Anti-slip porcelain tiles</li>
                <li><strong>Furniture:</strong> Weather-resistant wicker set</li>
                <li><strong>Shading:</strong> Retractable sun screens</li>
                <li><strong>Climate Control:</strong> Built-in misting system</li>
            </ul>
        </div>

        <div class="project-achievement">
            <p>This project demonstrates Heaven Life's unmatched capability to deliver high-end outdoor transformations within aggressive timelines while maintaining exceptional quality standards.</p>
        </div>
    `,

    },
    {
        id: 7,
        sector: "Landscape Design",
        client: "Private Client",
        role: "Full-Service Landscape Contractor",
        title: "Luxury Landscape Oasis - Katameya, Cairo",
        mainImage: "../assets/id-7/land-m.webp",
        gallery: ["../assets/id-7/land-1.webp", "../assets/id-7/land-2.webp", "../assets/id-7/land-3.webp", "../assets/id-7/land-4.webp"],
        location: "Katameya, Cairo",
        date: "2024",
        description: `
        <div class="project-header">
            <h3>3-Month Landscape Transformation</h3>
            <div class="project-meta">
                <span class="location-badge">Katameya Gardens</span>
                <span class="duration-badge">May - Aug 2024</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A comprehensive 250m² landscape transformation blending water features, illuminated hardscaping, and hybrid vegetation to create a private resort-style retreat.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <li><strong>Area :</strong> 250 m² covered outdoor space</li>
            </div>
            <div class="stat-box">
                <h4>12 Weeks</h4>
                <p>Completion Time</p>
            </div>
            <div class="stat-box">
                <h4>5 Zones</h4>
                <p>Functional Areas</p>
            </div>
        </div>

        <div class="design-section">
            <h4><i class="fas fa-project-diagram"></i> Digital Design Process</h4>
            <div class="design-feature">
                <ul>
                    <li><strong>2D Master Planning :</strong> AutoCAD technical drawings</li>
                    <li><strong>3D Visualization :</strong> Lumion real-time rendering</li>
                    <li><strong>VR Walkthroughs :</strong> Client preview capability</li>
                </ul>
            </div>
        </div>

        <div class="feature-section">
            <h4><i class="fas fa-spa"></i> Landscape Features</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Aquatic Centerpiece</h5>
                    <ul>
                        <li>25m infinity-edge pool</li>
                        <li>Natural stone waterfall</li>
                        <li>Integrated jacuzzi zone</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h5>Illuminated Hardscape</h5>
                    <ul>
                        <li>Hand-cut marble pathways</li>
                        <li>LED in-ground lighting</li>
                        <li>Weather-resistant finishes</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h5>Botanical Elements</h5>
                    <ul>
                        <li>60% drought-resistant plants</li>
                        <li>40% artificial greenery</li>
                        <li>Automatic irrigation system</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="systems-section">
            <h4><i class="fas fa-cogs"></i> Integrated Systems</h4>
            <ul class="system-features">
                <li>
                    <strong>Water Management :</strong>
                    <ul>
                        <li>Smart filtration system</li>
                        <li>Rainwater harvesting</li>
                    </ul>
                </li>
                <li>
                    <strong>Lighting Control :</strong>
                    <ul>
                        <li>DALI-controlled LED system</li>
                        <li>Moonlight effect lighting</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="testimonial">
            <blockquote>
                "Heaven Life transformed our outdoor space into a year-round resort experience, delivering on both aesthetics and functionality."
                <cite>- Homeowner</cite>
            </blockquote>
        </div>
    `,

    },
    {
        id: 8,
        sector: "Residential Finishing",
        client: "Private Client",
        role: "Turnkey Finishing Contractor",
        title: "Luxury Apartment - Nasr City, Cairo",
        mainImage: "../assets/id-8/aprt-m.webp",
        gallery: ["../assets/id-8/aprt-1.webp", "../assets/id-8/aprt-2.webp", "../assets/id-8/aprt-3.webp", "../assets/id-8/aprt-4.webp"],
        location: "Nasr City, Cairo",
        date: "2025",
        description: `
        <div class="project-header">
            <h3>Premium Residential Finishing</h3>
            <div class="project-meta">
                <span class="location-badge">Nasr City</span>
                <span class="duration-badge">3-5 Months</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A complete high-end finishing package transforming structural work into a modern smart home with premium materials and meticulous craftsmanship.</p>
        </div>

        <div class="project-specs">
            <h4><i class="fas fa-ruler-combined"></i> Project Specifications</h4>
            <div class="specs-grid">
                <div class="spec-item">
                    <h5>Area</h5>
                    <p>100 m² (2BR)</p>
                </div>
                <div class="spec-item">
                    <h5>Finishing Level</h5>
                    <p>Luxury Category A</p>
                </div>
                <div class="spec-item">
                    <h5>Smart Systems</h5>
                    <p>Full home automation</p>
                </div>
            </div>
        </div>

        <div class="execution-section">
            <h4><i class="fas fa-tasks"></i> Execution Phases</h4>
            <div class="phase-accordion">
                <div class="phase">
                    <h5>1. Structural Preparation (Weeks 1-4)</h5>
                    <ul>
                        <li>Precision plastering & leveling</li>
                        <li>Complete MEP rough-ins</li>
                        <li>Subfloor preparation</li>
                    </ul>
                </div>
                <div class="phase">
                    <h5>2. Core Finishes (Weeks 5-8)</h5>
                    <ul>
                        <li>Porcelain flooring installation</li>
                        <li>Custom millwork fabrication</li>
                        <li>Wall cladding & feature walls</li>
                    </ul>
                </div>
                <div class="phase">
                    <h5>3. Final Touches (Weeks 9-12)</h5>
                    <ul>
                        <li>Smart lighting commissioning</li>
                        <li>Premium paint application</li>
                        <li>Quality assurance inspections</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="feature-section">
            <h4><i class="fas fa-star"></i> Premium Features</h4>
            <div class="feature-highlights">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h5>Smart Lighting</h5>
                    <p>Lutron HomeWorks system with scene programming</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h5>Wall Treatments</h5>
                    <p>Italian marble cladding + custom wall panels</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-door-open"></i>
                    </div>
                    <h5>Custom Millwork</h5>
                    <p>Handcrafted walnut veneer cabinetry</p>
                </div>
            </div>
        </div>

        <div class="material-specs">
            <h4><i class="fas fa-clipboard-check"></i> Material Specifications</h4>
            <ul class="material-list">
                <li><strong>Flooring:</strong> 18mm engineered oak wood (Herringbone pattern)</li>
                <li><strong>Paint:</strong> Jotun Lady Majesty premium series</li>
                <li><strong>Hardware:</strong> Hafele architectural finishes</li>
                <li><strong>Smart System:</strong> Control4 automation package</li>
            </ul>
        </div>
    `,

    },
    {
        id: 9,
        sector: "Luxury Residential",
        client: "Private Client",
        role: "Design & Build Contractor",
        title: "Signature Luxury Villa - New Cairo",
        mainImage: "../assets/id-9/villa-m.webp",
        gallery: ["../assets/id-9/villa-1.webp", "../assets/id-9/villa-2.webp", "../assets/id-9/villa-3.webp", "../assets/id-9/villa-4.webp"],
        location: "New Cairo Compound",
        date: "2024",
        description: `
        <div class="project-header">
            <h3>Turnkey Villa Construction</h3>
            <div class="project-meta">
                <span class="location-badge">New Cairo</span>
                <span class="excellence-badge">Design-Build Excellence</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A complete 550m² luxury villa delivered turnkey, from 3D conceptualization to fully furnished reality, showcasing Heaven Life's end-to-end capabilities in premium residential construction.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <h4>550 m²</h4>
                <p>Built-up Area</p>
            </div>
            <div class="stat-box">
                <h4>6 Beds</h4>
                <p>Master Suites</p>
            </div>
            <div class="stat-box">
                <h4>100%</h4>
                <p>Turnkey Delivery</p>
            </div>
        </div>

        <div class="design-section">
            <h4><i class="fas fa-cube"></i> Design Innovation</h4>
            <div class="design-feature">
                <h5>Immersive 3D Process</h5>
                <ul>
                    <li>Full BIM implementation (Revit + Enscape)</li>
                    <li>Virtual reality walkthroughs</li>
                    <li>Real-time material visualization</li>
                </ul>
            </div>
        </div>

        <div class="construction-section">
            <h4><i class="fas fa-hard-hat"></i> Construction Highlights</h4>
            <div class="phase-grid">
                <div class="phase-card">
                    <h5>Structural Excellence</h5>
                    <ul>
                        <li>Reinforced concrete frame</li>
                        <li>Thermal insulation layers</li>
                        <li>Acoustic separation walls</li>
                    </ul>
                </div>
                <div class="phase-card">
                    <h5>Premium Finishes</h5>
                    <ul>
                        <li>Custom Italian marble flooring</li>
                        <li>Handcrafted wood paneling</li>
                        <li>Smart glass facades</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="systems-section">
            <h4><i class="fas fa-network-wired"></i> Integrated Systems</h4>
            <ul class="system-list">
                <li>
                    <strong>Smart Home:</strong>
                    <ul>
                        <li>Control4 automation system</li>
                        <li>KNX lighting control</li>
                        <li>Multi-zone audio/video</li>
                    </ul>
                </li>
                <li>
                    <strong>Climate:</strong>
                    <ul>
                        <li>VRF air conditioning</li>
                        <li>Underfloor heating</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="location-benefits">
            <h4><i class="fas fa-map-marker-alt"></i> Compound Amenities</h4>
            <ul>
                <li>24/7 secured community</li>
                <li>Landscaped gardens</li>
                <li>Olympic-size swimming pool</li>
                <li>Clubhouse facilities</li>
            </ul>
        </div>
    `,

    },
    {
        id: 10,
        sector: "Luxury Interiors",
        client: "Private Client",
        role: "Turnkey Interior Contractor",
        title: "Premium Apartment Interior - Cairo",
        mainImage: "../assets/id-10/apartment-m.webp",
        gallery: ["../assets/id-10/apartment-1.webp", "../assets/id-10/apartment-2.webp", "../assets/id-10/apartment-3.webp", "../assets/id-10/apartment-4.webp"],
        location: "Prime Cairo Location, Egypt",
        date: "2024",
        description: `
        <div class="project-header">
            <h3>80-Day Luxury Interior Transformation</h3>
            <div class="project-meta">
                <span class="location-badge">Cairo Residence</span>
                <span class="record-badge">Record Timeline</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A complete 150m² luxury interior package delivered in just 80 days, combining sophisticated 3D planning with high-end finishes and bespoke furniture solutions.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <h4>150 m²</h4>
                <p>Interior Space</p>
            </div>
            <div class="stat-box">
                <h4>80 Days</h4>
                <p>From Design to Handover</p>
            </div>
            <div class="stat-box">
                <h4>100%</h4>
                <p>Turnkey Solution</p>
            </div>
        </div>

        <div class="design-section">
            <h4><i class="fas fa-pencil-ruler"></i> Design Innovation</h4>
            <div class="design-feature">
                <h5>Immersive 3D Process</h5>
                <ul>
                    <li>Full BIM-enabled interior modeling</li>
                    <li>Virtual reality walkthroughs</li>
                    <li>Material visualization technology</li>
                    <li>Lighting simulation studies</li>
                </ul>
            </div>
        </div>

        <div class="feature-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-home"></i>
                </div>
                <h5>Living Spaces</h5>
                <ul>
                    <li>Custom millwork wall paneling</li>
                    <li>Italian marble feature walls</li>
                    <li>Smart glass partitions</li>
                </ul>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <h5>Executive Office</h5>
                <ul>
                    <li>Ergonomic design solutions</li>
                    <li>Acoustic paneling</li>
                    <li>Integrated cable management</li>
                </ul>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-tshirt"></i>
                </div>
                <h5>Dressing Rooms</h5>
                <ul>
                    <li>Custom walnut cabinetry</li>
                    <li>LED-lit display cases</li>
                    <li>Motorized accessory drawers</li>
                </ul>
            </div>
        </div>

        <div class="material-specs">
            <h4><i class="fas fa-clipboard-check"></i> Material Specifications</h4>
            <div class="specs-columns">
                <div>
                    <h5>Flooring</h5>
                    <ul>
                        <li>French oak herringbone (18mm)</li>
                        <li>Statuario marble inlays</li>
                    </ul>
                </div>
                <div>
                    <h5>Wall Finishes</h5>
                    <ul>
                        <li>Venetian plaster feature walls</li>
                        <li>Custom 3D wall panels</li>
                    </ul>
                </div>
                <div>
                    <h5>Millwork</h5>
                    <ul>
                        <li>AA-grade walnut veneers</li>
                        <li>Soft-close Blum hardware</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="timeline-section">
            <h4><i class="fas fa-calendar-alt"></i> Project Phases</h4>
            <div class="timeline-bar">
                <div class="phase" style="width: 20%">
                    <span>Weeks 1-2</span>
                    <p>Design Finalization</p>
                </div>
                <div class="phase" style="width: 30%">
                    <span>Weeks 3-6</span>
                    <p>Material Procurement</p>
                </div>
                <div class="phase" style="width: 50%">
                    <span>Weeks 7-12</span>
                    <p>Installation & Finishing</p>
                </div>
            </div>
        </div>
    `,

    },
    {
        id: 11,
        sector: "Commercial Interiors",
        client: "Engineering Consultancy Firm",
        role: "Design & Build Contractor",
        title: "Luxury Duplex - Fifth Settlement, New Cairo",
        mainImage: "../assets/id-11/office-m.webp",
        gallery: ["../assets/id-11/office-1.webp", "../assets/id-11/office-2.webp", "../assets/id-11/office-3.webp", "../assets/id-11/office-4.webp"],
        location: "Prime Business District, New Cairo",
        date: "2024",
        description: `
        <div class="project-header">
            <h3>Engineering Office with Cultural Identity</h3>
            <div class="project-meta">
                <span class="style-badge">Islamic Contemporary</span>
                <span class="purpose-badge">Functional Design</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A 50m² engineering office blending modern functionality with traditional Islamic design elements, creating an inspiring workspace that bridges cultural heritage with technical innovation.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <h4>50 m²</h4>
                <p>Total Area</p>
            </div>
            <div class="stat-box">
                <h4>3 Zones</h4>
                <p>Functional Areas</p>
            </div>
            <div class="stat-box">
                <h4>100%</h4>
                <p>Custom Solutions</p>
            </div>
        </div>

        <div class="design-section">
            <h4><i class="fas fa-mosque"></i> Design Philosophy</h4>
            <div class="design-feature">
                <h5>Cultural Fusion Architecture</h5>
                <ul>
                    <li>Contemporary interpretation of Islamic geometric patterns</li>
                    <li>Modern mashrabiya-inspired screens</li>
                    <li>Calligraphic feature walls with LED backlighting</li>
                    <li>Arabesque motif ceiling designs</li>
                </ul>
            </div>
        </div>

        <div class="space-organization">
            <h4><i class="fas fa-project-diagram"></i> Space Optimization</h4>
            <div class="space-grid">
                <div class="space-card">
                    <h5>Work Zones</h5>
                    <ul>
                        <li>Ergonomic modular workstations</li>
                        <li>Acoustically treated partitions</li>
                        <li>Task-appropriate lighting solutions</li>
                    </ul>
                </div>
                <div class="space-card">
                    <h5>Collaboration Areas</h5>
                    <ul>
                        <li>Interactive digital whiteboards</li>
                        <li>Flexible seating arrangements</li>
                        <li>Integrated power/data ports</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="material-specs">
            <h4><i class="fas fa-palette"></i> Material Palette</h4>
            <div class="material-grid">
                <div class="material-card">
                    <div class="swatch" style="background-color: #e6d3a7;"></div>
                    <h5>Traditional Elements</h5>
                    <ul>
                        <li>Laser-cut metal screens</li>
                        <li>Hand-laid zellige tile accents</li>
                        <li>Carved wood panels</li>
                    </ul>
                </div>
                <div class="material-card">
                    <div class="swatch" style="background-color: #f5f5f5;"></div>
                    <h5>Modern Components</h5>
                    <ul>
                        <li>Acoustic felt wall systems</li>
                        <li>Magnetic glass writable surfaces</li>
                        <li>Epoxy resin flooring</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="technical-features">
            <h4><i class="fas fa-cogs"></i> Technical Integration</h4>
            <ul>
                <li><strong>Lighting:</strong> Circadian rhythm LED system with Islamic pattern projectors</li>
                <li><strong>HVAC:</strong> Discreet displacement ventilation with traditional lattice covers</li>
                <li><strong>Acoustics:</strong> Sound-absorbing panels with geometric perforations</li>
            </ul>
        </div>
    `,

    },
    {
        id: 12,
        sector: "Luxury Residential",
        client: "Private Client",
        role: "Design & Build Contractor",
        title: "Diplomats Compound Duplex - New Cairo",
        mainImage: "../assets/id-12/duplex-m.webp",
        gallery: ["../assets/id-12/duplex-1.webp", "../assets/id-12/duplex-2.webp", "../assets/id-12/duplex-3.webp", "../assets/id-12/duplex-4.webp"],
        location: "Diplomats Compound, New Cairo",
        date: "2023",
        description: `
        <div class="project-header">
            <h3>4-Month Turnkey Duplex Completion</h3>
            <div class="project-meta">
                <span class="location-badge">New Cairo</span>
                <span class="achievement-badge">Client-Direct Execution</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A 320m² luxury duplex executed without preliminary 3D designs, demonstrating Heaven Life's adaptive capabilities while maintaining premium quality standards within an accelerated timeline.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <h4>320 m²</h4>
                <p>Total Area</p>
            </div>
            <div class="stat-box">
                <h4>4 Months</h4>
                <p>June - Oct 2023</p>
            </div>
        </div>

        <div class="challenge-section">
            <h4><i class="fas fa-exclamation-triangle"></i> Project Challenges</h4>
            <ul>
                <li>Client-directed execution without 3D visualization</li>
                <li>Frequent design adjustments during construction</li>
                <li>Simultaneous pool construction with main structure</li>
                <li>Aggressive 4-month completion timeline</li>
            </ul>
        </div>

        <div class="execution-section">
            <h4><i class="fas fa-hammer"></i> Execution Phases</h4>
            <div class="phase-timeline">
                <div class="phase">
                    <h5>Month 1: Structural Works</h5>
                    <ul>
                        <li>Precision plastering and leveling</li>
                        <li>Core MEP rough-ins (plumbing/electrical)</li>
                        <li>Pool shell construction</li>
                    </ul>
                </div>
                <div class="phase">
                    <h5>Month 2: Systems Installation</h5>
                    <ul>
                        <li>Complete electrical wiring</li>
                        <li>HVAC ductwork and piping</li>
                        <li>Pool mechanical room setup</li>
                    </ul>
                </div>
                <div class="phase">
                    <h5>Month 3: Finishes</h5>
                    <ul>
                        <li>Custom millwork installation</li>
                        <li>Porcelain tile laying</li>
                        <li>Pool tiling and coping</li>
                    </ul>
                </div>
                <div class="phase">
                    <h5>Month 4: Final Touches</h5>
                    <ul>
                        <li>Premium paint application</li>
                        <li>Landscape integration</li>
                        <li>Quality assurance inspections</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="feature-section">
            <h4><i class="fas fa-star"></i> Key Features</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Swimming Pool</h5>
                    <ul>
                        <li>6m × 3m reinforced concrete</li>
                        <li>Dedicated filtration room</li>
                        <li>Saltwater system</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h5>Material Quality</h5>
                    <ul>
                        <li>Italian porcelain flooring</li>
                        <li>HDF core interior doors</li>
                        <li>Low-VOC paints</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="achievement-section">
            <h4><i class="fas fa-trophy"></i> Project Achievements</h4>
            <ul>
                <li>Zero design revisions post-completion</li>
                <li>100% client satisfaction rating</li>
                <li>30% faster than industry standard timeline</li>
            </ul>
        </div>
    `,

    },
    {
        id: 13,
        sector: "Architectural Facades",
        client: "Private Client",
        role: "Facade Design & Renovation",
        title: "Villa Facade Transformation - Fifth Settlement",
        mainImage: "../assets/id-13/safety-m.webp",
        gallery: ["../assets/id-13/safety-1.webp", "../assets/id-13/safety-2.webp", "../assets/id-13/safety-3.webp", "../assets/id-13/safety-4.webp"],
        location: "Fifth Settlement, New Cairo",
        date: "2023",
        description: `
        <div class="project-header">
            <h3>Modern Facade Redesign</h3>
            <div class="project-meta">
                <span class="location-badge">Fifth Settlement</span>
                <span class="innovation-badge">Material Innovation</span>
            </div>
        </div>

        <div class="project-overview">
            <p>A complete exterior transformation replacing traditional elements with contemporary wood-alternative cladding and security-enhanced features, achieving a 100% visual and functional upgrade.</p>
        </div>

        <div class="project-stats">
            <div class="stat-box">
                <h4>15 m²</h4>
                <p>Facade Area</p>
            </div>
            <div class="stat-box">
                <h4>0%</h4>
                <p>Natural Wood</p>
            </div>
            <div class="stat-box">
                <h4>100%</h4>
                <p>Weatherproof</p>
            </div>
        </div>

        <div class="material-innovation">
            <h4><i class="fas fa-leaf"></i> Sustainable Cladding Solution</h4>
            <div class="material-details">
                <h5>NeoWood Cladding System</h5>
                <ul>
                    <li><strong>Material:</strong> Mineral-based wood alternative (100% recyclable)</li>
                    <li><strong>Durability:</strong> 25-year warranty against weathering</li>
                    <li><strong>Finish:</strong> Thermal-modified oak appearance</li>
                    <li><strong>Benefits:</strong>
                        <ul class="benefit-list">
                            <li>Zero wood maintenance requirements</li>
                            <li>Class A fire rating</li>
                            <li>UV-resistant color stability</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="security-section">
            <h4><i class="fas fa-shield-alt"></i> Security Enhancements</h4>
            <div class="security-features">
                <div class="feature-card">
                    <h5>Armored Entry System</h5>
                    <ul>
                        <li>Ballistic-grade steel core</li>
                        <li>Multi-point locking mechanism</li>
                        <li>Thermal break technology</li>
                        <li>Seamless design integration</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="technical-section">
            <h4><i class="fas fa-ruler-combined"></i> Technical Specifications</h4>
            <div class="spec-grid">
                <div class="spec-card">
                    <h5>Structural Preparation</h5>
                    <ul>
                        <li>Existing surface remediation</li>
                        <li>Aluminum substructure framing</li>
                        <li>Thermal insulation layer</li>
                    </ul>
                </div>
                <div class="spec-card">
                    <h5>Installation</h5>
                    <ul>
                        <li>Precision laser-leveled alignment</li>
                        <li>Hidden fastener system</li>
                        <li>Expansion joint detailing</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="value-proposition">
            <h4><i class="fas fa-chart-line"></i> Added Value</h4>
            <ul>
                <li>38% improvement in thermal insulation</li>
                <li>63% reduction in facade maintenance costs</li>
                <li>Increased property valuation by 15-20%</li>
            </ul>
        </div>
    `,

    },
];
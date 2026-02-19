export const products = {
    'bard': {
        name: "Battlefield Artillery Recon Drone (BARD)",
        tagline: "QUADCOPTER ISR · TACTICAL AUTONOMY",
        brand: "MAS",
        category: "ISR",
        description: "A multi-role quadcopter family designed for strategic reconnaissance, thermal imaging, and tactical payload delivery.",
        longDescription: "BARD is a mission-critical quadcopter system engineered for persistent battlefield intelligence. The platform supports multiple variants ranging from standard day surveillance to advanced thermal imaging with Laser Range Finding (LRF) and specialized grenade dropping capabilities.",
        heroSpecs: [
            { label: "Endurance", value: "60m" },
            { label: "Range", value: "5km" },
            { label: "Altitude", value: "800m" },
            { label: "Frame", value: "690mm" }
        ],
        performanceMetrics: [
            { label: "AUTONOMY_LOGIC", value: 95, unit: "%" },
            { label: "RELIABILITY_INDEX", value: 98, unit: "%" },
            { label: "THERMAL_ACCURACY", value: 92, unit: "%" },
            { label: "PAYLOAD_EFFICIENCY", value: 90, unit: "%" }
        ],
        featureCards: [
            {
                title: "Multi-Mission Payload",
                description: "Interchangeable payloads supporting EO/IR sensors, Laser Range Finders, and 2kg tactical release systems."
            },
            {
                title: "Rugged Design",
                description: "Optimized 690mm frame built for high-altitude deployment and mission-ready durability in contested environments."
            },
            {
                title: "Tactical ISR",
                description: "Integrated AI processing for target acquisition, tracking, and post-strike assessment in real-time."
            }
        ],
        variants: [
            { variant: "Day", type: "Quad ISR", endurance: "~60m", range: "5km", altitude: "800m", agl: "500m", frame: "690mm", auw: "4kg", payload: "EO", camera: "2K EO", feature: "Surveillance" },
            { variant: "Thermal", type: "Quad ISR", endurance: "~60m", range: "5km", altitude: "800m", agl: "500m", frame: "690mm", auw: "4kg", payload: "EO+Thermal", camera: "EO+Thermal", feature: "Night Surveillance" },
            { variant: "Thermal + LRF", type: "Quad ISR", endurance: "~60m", range: "5km", altitude: "800m", agl: "500m", frame: "690mm", auw: "4kg", payload: "EO+Thermal+LRF", camera: "EO+Thermal", feature: "Laser Range Finder" },
            { variant: "Day Grenade", type: "Quad ISR", endurance: "~30m", range: "5km", altitude: "800m", agl: "500m", frame: "690mm", auw: "6kg", payload: "2kg Grenade", camera: "4K EO", feature: "Grenade Dropper" },
            { variant: "Day/Night Grenade", type: "Quad ISR", endurance: "~30m", range: "5km", altitude: "800m", agl: "500m", frame: "690mm", auw: "6kg", payload: "2kg Grenade", camera: "EO+Thermal", feature: "Grenade Dropper" }
        ],
        specs: [
            { label: "Frame Size", value: "690mm" },
            { label: "Max AUW", value: "6.0kg" },
            { label: "Datalink", value: "Encrypted Secure" },
            { label: "Propulsion", value: "Electric Brushless" }
        ],
        features: [
            "Autonomous Waypoint Mission",
            "Object Tracking & Locking",
            "Target Geo-location Extraction",
            "Grenade Drop System Ready",
            "Anti-Jamming GNSS"
        ],
        imageClass: "product-image-bard",
        nickname: "SENTINEL",
        galleryImages: [
            "/partners/bard1.png",
            "/partners/bard2.jpeg",
            "/partners/bard3.png"
        ]
    },
    'horizon-vtol': {
        name: "HORIZON VTOL",
        tagline: "FIXED WING ISR · LONG RANGE",
        brand: "MAS",
        category: "ISR",
        description: "Vertical Take-Off and Landing fixed-wing platform for extended surveillance and training missions.",
        longDescription: "The HORIZON VTOL combines the efficiency of fixed-wing flight with the launch flexibility of a multicopter. It is the premier choice for long-endurance reconnaissance and training, offering stable flight characteristics and advanced multi-axis stabilized sensor suites.",
        heroSpecs: [
            { label: "Endurance", value: "40m" },
            { label: "Range", value: "5km" },
            { label: "Wingspan", value: "1200mm" },
            { label: "AUW", value: "3.5kg" }
        ],
        featureCards: [
            {
                title: "VTOL Efficiency",
                description: "Seamless transition between vertical lift and efficient horizontal cruise for maximum field versatility."
            },
            {
                title: "Stabilized Imaging",
                description: "Equipped with a 3-axis gimbal system for crystal-clear ISR imagery during high-speed flight."
            },
            {
                title: "Strategic Range",
                description: "Optimized for 5km+ operational range with encrypted long-range telemetry and video feed."
            }
        ],
        variants: [
            { variant: "Day", type: "VTOL Fixed Wing", endurance: "~40m", range: "5km", altitude: "700m", agl: "300m", frame: "1200mm", auw: "3.5kg", payload: "EO", camera: "EO 3-axis", feature: "Training/ISR" },
            { variant: "Day/Night", type: "VTOL Fixed Wing", endurance: "~40m", range: "5km", altitude: "700m", agl: "300m", frame: "1200mm", auw: "3.5kg", payload: "EO/IR", camera: "EO/IR 3-axis", feature: "Day Night ISR" }
        ],
        specs: [
            { label: "Wingspan", value: "1200mm" },
            { label: "Flight Mode", value: "VTOL to Cruise" },
            { label: "Battery", value: "High-Density LiPo" },
            { label: "Max Speed", value: "75 KMPH" }
        ],
        features: [
            "Automatic Transition",
            "3-Axis Stabilized Gimbal",
            "NAVIC/GPS Navigation",
            "Rugged Composite Frame",
            "BVLOS Ready"
        ],
        imageClass: "product-image-aot",
        nickname: "OBSERVER"
    },
    'horizon-fpv': {
        name: "HORIZON FPV",
        tagline: "FIXED WING TRAINER · HIGH SPEED",
        brand: "MAS",
        category: "TRAINER",
        description: "Dedicated high-endurance fixed-wing platform for advanced pilot training and FPV operations.",
        longDescription: "The HORIZON FPV is a specialized fixed-wing trainer designed for large-scale area familiarization and high-speed FPV pilot training. With a massive 1645mm wingspan, it offers exceptional glide performance and stability.",
        heroSpecs: [
            { label: "Endurance", value: "35m" },
            { label: "Range", value: "6km" },
            { label: "Wingspan", value: "1645mm" },
            { label: "AUW", value: "3.5kg" }
        ],
        featureCards: [
            {
                title: "Glider Performance",
                description: "1645mm wingspan provides superior lift-to-drag ratios for extended training sessions."
            },
            {
                title: "FPV Mastery",
                description: "Low-latency FPV camera system designed for high-speed maneuvering and pilot skill development."
            },
            {
                title: "Durable Frame",
                description: "Reinforced airframe built to withstand the rigors of repeated training cycles and field landings."
            }
        ],
        variants: [
            { variant: "FPV", type: "Fixed Wing Trainer", endurance: "~35m", range: "6km", altitude: "700m", agl: "300m", frame: "1645mm", auw: "3.5kg", payload: "0.5kg", camera: "FPV Camera", feature: "Trainer" }
        ],
        specs: [
            { label: "Wingspan", value: "1645mm" },
            { label: "Cruise Speed", value: "60 KMPH" },
            { label: "Max Payload", value: "0.5kg" },
            { label: "Range", value: "6km" }
        ],
        features: [
            "High Aspect Ratio Wings",
            "Low Latency FPV",
            "Modular Electronic Tray",
            "Field Repairable",
            "Precision Control Surface"
        ],
        imageClass: "product-image-sim",
        nickname: "SIMULATE"
    },
    'stinger': {
        name: "STINGER",
        tagline: "FPV KAMIKAZE · PRECISION STRIKE",
        brand: "MAS",
        category: "TACTICAL",
        description: "High-performance FPV quadcopters optimized for precision strike and tactical kamikaze missions.",
        longDescription: "The STINGER family represents the cutting edge of tactical expendable UAVs. Ranging from 7 to 15 inches, these platforms are designed for high-speed interception, heavy payload delivery, and precision target engagement in contested environments.",
        heroSpecs: [
            { label: "Endurance", value: "40m" },
            { label: "Combat Range", value: "5km" },
            { label: "Max Payload", value: "2kg" },
            { label: "Speed", value: "120+ KPH" }
        ],
        featureCards: [
            {
                title: "Kinetic Precision",
                description: "High-KV motor configurations providing the agility needed for precise terminal phase maneuvers."
            },
            {
                title: "Heavy Payload",
                description: "Up to 2kg mission payload capacity in the 15-inch variant, suitable for a wide range of tactical roles."
            },
            {
                title: "Jam-Resistant Feed",
                description: "Optimized video links designed to maintain clarity in electronically dense environments."
            }
        ],
        variants: [
            { variant: "7 Inch Day", type: "FPV Quad", endurance: "~22m", range: "2km", altitude: "800m", agl: "400m", frame: "7 Inch", auw: "1.6kg", payload: "1kg", camera: "2K FPV", feature: "Trainer FPV" },
            { variant: "10 Inch Day/Night", type: "FPV Quad", endurance: "~35m", range: "4km", altitude: "800m", agl: "400m", frame: "10 Inch", auw: "2.4kg", payload: "1kg", camera: "EO+Thermal", feature: "Tactical FPV" },
            { variant: "15 Inch Day/Night", type: "FPV Quad", endurance: "~40m", range: "5km", altitude: "800m", agl: "400m", frame: "15 Inch", auw: "4.2kg", payload: "2kg", camera: "EO+Thermal", feature: "Heavy Lift FPV" }
        ],
        specs: [
            { label: "Frame Sizes", value: "7 / 10 / 15 Inch" },
            { label: "Max Speed", value: "140 KMPH" },
            { label: "Latency", value: "< 20ms" },
            { label: "Payload Max", value: "2.0kg" }
        ],
        features: [
            "High Discharge LiPo Support",
            "Reinforced Carbon Frame",
            "Emergency Detonate Ready",
            "Low Profile Design",
            "Extreme Agility"
        ],
        imageClass: "product-image-hydra"
    },
    'aot': {
        name: "Aerial Observation Trainer (AOT)",
        tagline: "QUADCOPTER TRAINER · PROP GUARDED",
        brand: "MAS",
        category: "TRAINER",
        description: "Safe and durable quadcopter trainer for entry-level UAV pilots and observation training.",
        longDescription: "The AOT 7-inch variant is the gold standard for pilot training. Featuring integrated prop guards and a stable analog FPV system, it allows trainees to master flight dynamics with minimal risk to the equipment or personnel.",
        heroSpecs: [
            { label: "Endurance", value: "30m" },
            { label: "Range", value: "3km" },
            { label: "Alititude", value: "600m" },
            { label: "Frame", value: "7 Inch" }
        ],
        featureCards: [
            {
                title: "Pilot Safety",
                description: "Full-surround prop guards significantly reduce risk during indoor and close-proximity training."
            },
            {
                title: "Analog Feedback",
                description: "Zero-latency analog FPV feed for developing instant muscle memory and flight reaction speeds."
            },
            {
                title: "Indigenous Trainer",
                description: "Fully designed and serviced in-house to ensure high availability for military training commands."
            }
        ],
        variants: [
            { variant: "7 Inch Trainer", type: "Quadcopter", endurance: "~30m", range: "3km", altitude: "600m", agl: "300m", frame: "7 Inch", auw: "2kg", payload: "0.2kg", camera: "Analog FPV", feature: "Prop Guard Trainer" }
        ],
        specs: [
            { label: "Frame Size", value: "7 Inch" },
            { label: "Prop Guards", value: "Integrated 360" },
            { label: "AUW", value: "2.0kg" },
            { label: "Navigation", value: "Standard GPS" }
        ],
        features: [
            "Shatter-Resistant Guards",
            "High Visibility LEDs",
            "Telemetry for Instructor",
            "Modular Arm System",
            "Quick-Swap Battery"
        ],
        imageClass: "product-image-aot"
    }
};

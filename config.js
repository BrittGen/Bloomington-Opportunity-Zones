var config = {
    style: 'mapbox://styles/inarreol/ck75p3ncw10r71ip85pq46jfx',
    accessToken: 'pk.eyJ1IjoiaW5hcnJlb2wiLCJhIjoiY2p1ZnB2MWh5MGd1NDQ0cGozN29kYmR3NSJ9.14s63N3V8r2xcufGCZrnqw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Opportunity Zones in Bloomington',
    subtitle: 'Flipping Finance 2020',
    byline: 'By Ingrid Arreola & Roger Lee',
    footer: 'Source: Source: State of Indiana, Bloomington Data',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Opportunity Zones',
            image: 'btown.jpg',
            description: 'Opportunity Zones are capable of positive social impact. While challenges exist, there are novel solutions to help bridge gaps between investors and the Bloomington community. The lack of communication between investors and community can cause difficulty with navigating economic development programs, this can be challenging. There is disconnect in the ability for investors’ to have a positive “social impact". Opportunity Zone investors have clear federal incentives, as well as state & local. The OZ is represented by the blue layer of the map.',
            location: {
                center: [-86.59049, 39.16653],
                zoom: 11.79,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'opportunity',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'opportunity',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'identifier-2',
            title: 'The TIF Social Impact',
            image: 'TIF.png',
            description: 'Tax Increment Financing "TIF" diverts future property tax revenue increases towards infrastructure investments that benefit all residents and businesses in the community, improving the quality of life for all. Locations inside of the TIF correspond to the orange layer of the map.',
            location: {
                center: [-86.54725, 39.16859],
                zoom: 14.14,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-3',
            title: 'Benefits of TIF in the OZ',
            image: '',
            description: 'Investments made within the boundaries of any Opportunity Zones "OZs" have the same benefit from the IRS at the federal level, there is no incremental benefit for projects with greater social return for the community. By investing in TIF zones in OZs, investors improve the quality of life for all residents as infrastructure gets better.',
            location: {
                center: [-86.54808, 39.16449],
                zoom: 14.26,
                pitch: 60.00,
                bearing: 7.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-4',
            title: 'TIF and the OZ',
            image: '',
            description: 'By investing in projects that the local government likes, investors help the community while also benefitting from local incentives & reducing friction encountered in the planning, zoning & permitting process. OZ projects require significant redevelopment, having the approval of the community helps a lot.',
            location: {
                center: [-86.54830, 39.15683],
                zoom: 14.11,
                pitch: 49.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-5',
            title: 'Community Benefits from TIF and OZ',
            image: '',
            description: 'With high real estate and stocks prices, many investors will use OZ Funds to defer capital gains tax and reinvest in tax free assets. Many small communities around the nation will see an influx of investment.',
            location: {
                center: [-86.55073, 39.14456],
                zoom: 14.41,
                pitch: 60.00,
                bearing: 7.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-6',
            title: 'CRED',
            image: 'CRED.png',
            description: 'Community Revitalization and Enhancement District “CRED” tax credits offer investors a 25% state tax credit calculated from all development expenses incurred to rehabilitate properties within a CRED district. CRED correspond to the green layer of the map.',
            location: {
                center: [-86.53791, 39.16865],
                zoom: 15.29,
                pitch: 44.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-7',
            title: 'Urban Enterprise Zone',
            image: 'UEZ.png',
            description: 'Within Urban Enterprise Zones "UEZs", investors benefit from state level tax incentives, property tax abatements, income tax deductions and credits in exchange for offering jobs and/or capital expenditures. UEZs correspond to the purple layer of the map.',
            location: {
                center: [-86.55454, 39.15552],
                zoom: 12.80,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-8',
            title: 'Certified Technology Park',
            image: 'CTP.png',
            description: 'Certified Technology Parks "CTPs" encourage STEM partnerships between communities, businesses, and universities. Similar to TIFs, CTPs allow the local government to reinvest incremental retail and income taxes generated from the park back into infrastructure. This location is visible in the pink layer of the map.',
            location: {
                center: [-86.55046, 39.17362],
                zoom: 14.40,
                pitch:  49.50,
                bearing: 0.09
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-9',
            title: 'The Dimension Mill',
            image: 'office.jpg',
            description: 'Bloomington has a burgeoning startup scene that is quickly outgrowing the Dimension Mill Coworking space creating a huge need for startup grade commercial office space that would stimulate job creation and stem brain drain! This hub is in a great location and represents real opportunity to create commercial office space that is located in an OZ (blue layer) right in the heart of the CTP (pink layer), a TIF district (orange layer), and an Enterprise Urban Zone (purple layer).',
            location: {
                center: [-86.53786, 39.17153],
                zoom: 17.35,
                pitch:  37.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-10',
            title: 'Resources',
            image: 'Resources.png',
            description: 'There are resources available if you are interested in investing in the CTP along with other areas in Bloomington. Please visit bloomington.in.gov. Staff from the Economic and Sustainable Development are available to answer questions.',
            location: {
                center: [-86.55454, 39.15552],
                zoom: 12.80,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
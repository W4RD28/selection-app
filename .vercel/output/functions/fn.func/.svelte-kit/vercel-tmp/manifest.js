export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-a4516a14.js","imports":["_app/immutable/start-a4516a14.js","_app/immutable/chunks/index-7bccd38b.js","_app/immutable/chunks/singletons-1f85790e.js","_app/immutable/chunks/index-aef88a00.js","_app/immutable/chunks/browser-ponyfill-10e9505f.js","_app/immutable/chunks/supabaseClient-8c0673ba.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/account/change-password",
				pattern: /^\/account\/change-password\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/announcements",
				pattern: /^\/announcements\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/announcements/[slug]",
				pattern: /^\/announcements\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/exam",
				pattern: /^\/exam\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/exam/finish-exam",
				pattern: /^\/exam\/finish-exam\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/exam/questions/[slug]",
				pattern: /^\/exam\/questions\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/exam/result",
				pattern: /^\/exam\/result\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/interview",
				pattern: /^\/interview\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/questionnaire",
				pattern: /^\/questionnaire\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/questionnaire/questions",
				pattern: /^\/questionnaire\/questions\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/questionnaire/thanks",
				pattern: /^\/questionnaire\/thanks\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

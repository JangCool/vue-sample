module.exports = {
    root: true,
    env: {
        node: true
    },
    "globals": {
        "selector": false,
        "hamonica": false,
        "interact": false,
        "dateRangePicker": false
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        // Add under other rules
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
        "ecmaVersion": 2021
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/ban-ts-comment" : "off",
        "@typescript-eslint/v"

    },
    overrides: [{
        files: [
            "**/__tests__/*.{j,t}s?(x)",
            "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ],
        env: {
            jest: true
        }
    }],
    settings: {
		'import/resolver': {
			alias: {
				map: [
					['@', './src']
				]
			}
		}
	}
};

module.exports = {
    "plugins": [
        "stylelint-csstree-validator",
        "stylelint-declaration-use-variable",
        "stylelint-scss",
        "stylelint-order"
    ],
    "rules": {
        "csstree/validator": true,

        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-newline-after": true,
        "scss/selector-no-redundant-nesting-selector": true,

        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-hex": null,
        "color-no-invalid-hex": true,

        "font-family-name-quotes": "always-where-recommended",
        "font-family-no-duplicate-names": true,
        "font-weight-notation": "named-where-possible",

        "function-blacklist": [],
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "never-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-scheme-blacklist": ["data:"],
        "function-url-quotes": "always",
        "function-url-scheme-whitelist": ["https"],
        "function-whitelist": null,
        "function-whitespace-after": "always",

        "number-leading-zero": "never",
        "number-max-precision": 3,
        "number-no-trailing-zeros": true,

        "string-no-newline": true,
        "string-quotes": "single",

        "length-zero-no-unit": true,

        "time-min-milliseconds": 100,

        "unit-blacklist": [],
        "unit-case": "lower",
        "unit-no-unknown": true,

        "value-no-vendor-prefix": null,

        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,

        "shorthand-property-no-redundant-values": true,

        "property-blacklist": [],
        "property-case": "lower",
        "property-no-unknown": true,
        "property-no-vendor-prefix": null,

        "keyframe-declaration-no-important": true,

        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-no-important": true,
        "declaration-property-unit-blacklist": {},
        "declaration-property-value-blacklist": {},
        "declaration-block-no-duplicate-properties": [true, {"ignore": ["consecutive-duplicates"]}],
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",

        "block-closing-brace-newline-after": "always",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-space-before": "always",

        "selector-attribute-brackets-space-inside": "never",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-max-universal": 0,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "single",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": [true, {"ignoreTypes": ["/^[$]/"]}],
        "selector-max-empty-lines": 0,

        "selector-list-comma-newline-after": "always-multi-line",
        "selector-list-comma-space-after": "always-single-line",

        "rule-empty-line-before": [
            "always",
            {
                "except": ["first-nested"],
                "ignore": ["after-comment"]
            }
        ],

        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",

        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",

        "at-rule-empty-line-before": [
            "always",
            {
                "except": ["first-nested", "blockless-after-same-name-blockless"],
                "ignore": ["after-comment"]
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always",
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": ["for", "mixin", "define-mixin", "media"]
            }
        ],
        "at-rule-semicolon-newline-after": "always",

        "comment-no-empty": true,
        "comment-whitespace-inside": "always",

        "indentation": 4,
        "max-line-length": 120,
        "max-empty-lines": 1,
        "no-descending-specificity": true,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,

        "order/order": [
            "dollar-variables",
            "custom-properties",
            "declarations",
            "at-rules",
            "rules"
        ]
    }
};

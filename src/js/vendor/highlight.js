;(function () {
  'use strict'

  var hljs = require('highlight.js/lib/highlight')
  hljs.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
  hljs.registerLanguage('clojure', require('highlight.js/lib/languages/clojure'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))

  hljs.registerLanguage('graphql', function (e) {
    return {
      aliases: ['gql'],
      keywords: {
        keyword: 'query mutation subscription|10 type input ' +
          'schema directive interface union scalar fragment|10 enum on ...',
        literal: 'true false null',
      },
      contains: [
        e.HASH_COMMENT_MODE,
        e.QUOTE_STRING_MODE,
        e.NUMBER_MODE,
        {
          className: 'type',
          begin: '[^\\w][A-Z][a-z]',
          end: '\\W',
          excludeEnd: !0,
        },
        {
          className: 'literal',
          begin: '[^\\w][A-Z][A-Z]',
          end: '\\W',
          excludeEnd: !0,
        },
        {
          className: 'variable',
          begin: '\\$',
          end: '\\W',
          excludeEnd: !0,
        },
        {
          className: 'keyword',
          begin: '[.]{2}',
          end: '\\.',
        },
        {
          className: 'meta',
          begin: '@',
          end: '\\W',
          excludeEnd: !0,
        },
      ],
      illegal: /([;<']|BEGIN)/,
    }
  })

  hljs.initHighlighting()
})()

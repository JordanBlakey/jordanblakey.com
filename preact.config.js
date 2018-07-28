import asyncPlugin from 'preact-cli-plugin-fast-async'
import criticalCssPlugin from 'preact-cli-plugin-critical-css'

export default (config, env) => {
  asyncPlugin(config)
  const criticalOptions = {
    inline: true, // Inline the generated critical-path CSS
    minify: true, // Minify critical-path CSS when inlining
    extract: true, // Extract inlined styles from referenced stylesheets
    width: 1300, // Viewport width
    height: 900, // Viewport height
    base: 'build/', // Your base directory
    dest: 'index-critical.html', // Target for final HTML output.
    pathPrefix: '/assets', // Prefix for asset directory
    timeout: 30000, // Complete Timeout for Operation
    ignore: [/some-regexp/], // ignore CSS rules
    ignoreOptions: {} // overwrite default options
  }
  criticalCssPlugin(config, env, criticalOptions)
}

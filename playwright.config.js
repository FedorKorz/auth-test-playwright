const { PlayWrightTestConfig } = require('@playwright/test')

const config = {
    retries: 1,
    timeout: 15000,
    reporter: './reporter.js',
    use: {
        baseURL: "https://demoqa.com/text-box",
        headless: false,
        viewport: { width: 1200, height: 720 },
        video: "retain-on-failure",
        screenshot: "off"
    },
    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' }
        },
        {
            name: 'Edge',
            use: { browserName: 'edge' }
        }
    ]
}

module.exports = config;
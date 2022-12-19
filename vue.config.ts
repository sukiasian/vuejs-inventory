import { defineConfig } from '@vue/cli-service';

module.exports = defineConfig({
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                return args;
            });
    }
});
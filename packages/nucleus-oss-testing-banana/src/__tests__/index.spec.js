const mainEntry = require('../index');
const PKG_NAME = 'nucleus-oss-testing-banana';

describe('simple unit testing', () => {
    it('should return version', () => {
        const packageVersion = mainEntry.getPackageVersion();
        expect(packageVersion).toBeDefined();
    });

    it('should return package name', () => {
        const packageName = mainEntry.getPackageName();
        expect(typeof packageName).toBe('string');
        expect(packageName).toBe(PKG_NAME);
    });

    it('should return package version', () => {
        const packageName = mainEntry.getPackageVersion();
        expect(typeof packageName).toBe('string');
        expect(packageName).toContain('.');
    });
});

describe('simple fruit testing', () => {
    it('should implement getPackageFruit', () => {
        expect(mainEntry.getPackageFruit).toBeDefined();
    });
});
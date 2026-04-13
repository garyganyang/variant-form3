const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

/**
 * 递归复制文件/文件夹
 * @param {string} source 源路径
 * @param {string} destination 目标路径
 */
async function copyFiles(source, destination) {
    try {
        // 检查源路径是否存在
        const stats = await fsPromises.stat(source);

        // 如果是文件夹，递归复制内部内容
        if (stats.isDirectory()) {
            // 创建目标文件夹（如果不存在）
            await fsPromises.mkdir(destination, { recursive: true });

            // 读取源文件夹内的所有文件/子文件夹
            const files = await fsPromises.readdir(source);

            // 逐个复制
            for (const file of files) {
                const srcPath = path.join(source, file);
                const destPath = path.join(destination, file);
                await copyFiles(srcPath, destPath);
            }
        } else {
            // 如果是文件，直接复制（覆盖已存在的文件）
            await fsPromises.copyFile(source, destination);
            console.log(`✅ 文件已复制: ${source} -> ${destination}`);
        }
    } catch (err) {
        console.error(`❌ 复制失败: ${source}`, err.message);
        throw err; // 抛出错误，让上层处理
    }
}

/**
 * 递归删除文件夹
 * @param {string} dirPath 要删除的文件夹路径
 */
async function deleteDirectory(dirPath) {
    try {
        // 检查文件夹是否存在
        const stats = await fsPromises.stat(dirPath);

        if (stats.isDirectory()) {
            // 读取文件夹内的所有内容
            const files = await fsPromises.readdir(dirPath);

            // 逐个删除子文件/子文件夹
            for (const file of files) {
                const filePath = path.join(dirPath, file);
                await deleteDirectory(filePath);
            }

            // 删除空文件夹
            await fsPromises.rmdir(dirPath);
            console.log(`✅ 文件夹已删除: ${dirPath}`);
        } else {
            // 如果路径是文件，直接删除文件
            await fsPromises.unlink(dirPath);
            console.log(`✅ 文件已删除: ${dirPath}`);
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(`ℹ️ 路径不存在，无需删除: ${dirPath}`);
        } else {
            console.error(`❌ 删除失败: ${dirPath}`, err.message);
            throw err;
        }
    }
}

/**
 * 主函数：执行复制和删除操作
 */
async function main() {
    // ====================== 请修改这里的配置 ======================
    // 要复制的文件/文件夹列表（支持单个文件、多个文件、文件夹）
    const sources = [
        // path.join(__dirname, 'source-files/file1.txt'), // 单个文件
        path.join(__dirname, 'dist/designer.es.js'),   // 整个文件夹
        path.join(__dirname, 'dist/designer.style.css'),   // 整个文件夹
        path.join(__dirname, 'dist/designer.umd.js'),   // 整个文件夹
        // path.join(__dirname, 'source-files/file2.jpg')  // 另一个文件
    ];

    // 复制的目标文件夹
    const targetDir = path.join('C:\\myWorkspace\\一点繁星\\项目\\epms2-o\\lib\\vform3');

    // 要删除的文件夹
    const dirToDelete = path.join('C:\\myWorkspace\\一点繁星\\项目\\epms2-o\\node_modules\\.vite');
    // =============================================================

    try {
        console.log('🚀 开始执行文件操作...');

        // 1. 执行复制操作
        console.log('\n📤 开始复制文件...');
        for (const source of sources) {
            // 计算目标路径（保持原文件/文件夹名）
            const destPath = path.join(targetDir, path.basename(source));
            await copyFiles(source, destPath);
        }

        // 2. 执行删除操作
        console.log('\n🗑️ 开始删除文件夹...');
        await deleteDirectory(dirToDelete);

        console.log('\n🎉 所有操作执行完成！');
    } catch (err) {
        console.error('\n❌ 操作执行失败', err.message);
        process.exit(1); // 非0退出码表示执行失败
    }
}

// 执行主函数
main();

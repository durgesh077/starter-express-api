import app from './dist/index.js';
import logger from './dist/src/logger/index.js';
const port = process.env.PORT || 5000;
app.listen(port, () => {
    logger.info(`Server started: http://localhost:${port}`);
});

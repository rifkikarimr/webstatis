const app = express();
const port = 8080;
const host = '0.0.0.0';


app.use(express.static('public')); // This serves static files from the 'public' directory

app.listen(port, host);

console.log(`Running on http://${host}:${port}`);
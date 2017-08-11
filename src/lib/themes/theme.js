import config from 'jsgis/config/jsgis.yml!text';
import YML from 'yamljs';

const conf = YML.parse(config);

export default conf.theme || 'default';

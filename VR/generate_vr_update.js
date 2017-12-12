const fs = require('fs');

var templateData = JSON.parse(fs.readFileSync('template_vr_base.json', 'utf8'));

templateData.fields.body = fs.readFileSync('template_vr_body.html', 'utf8');

fs.writeFileSync('template_vr_update.json', JSON.stringify(templateData, null, 2), { encoding: 'utf8' });

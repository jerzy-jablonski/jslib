function namespaces(nameS, nameS_string) {
    'use strict';
    
    var nameS_parts,
        i = 0,
        part = '',
        parent = null;
    
    if (typeof window[nameS] !== 'object') {
        window[nameS] = {};
    }
    
    parent = window[nameS];
    
    if (nameS_string) {
        nameS_parts = nameS_string.split('.');
        for (i; i < nameS_parts.length; i += 1) {
            part = nameS_parts[i];
            parent[part] = parent[part] || {};
            parent = parent[part];
        }
    }
}

namespaces('test', 'mytest');
namespaces('test', 'mytest.test2');

test = function() {console.log(this);}
test.mytest = function() {console.log('a');}
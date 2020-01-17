window.relativeSelectors = [
'html',
'body', 
'div', 
'div p',      
'div div',
'div ~ p', 
'div ~ div ~ p',
'div > p', 
'div > p > p',
'div + p', 
'div + div + p',
'div p a', 
'div, p, a',
'div, div, div',
'#title', 
];

window.clsSelectors = [
'.note',
'div.example', 
'ul .toc', 
'ul.toc', 
'div.example, div.note', 
'.url.fn',
'.fn.url', 
'ul.toc span.secno', 
'.toc .secno'
];

window.attrSelectors = [
'a[href][class]', 
'a[href^="https"]',
'div[class]', 
'div[class=example]', 
'div[class^=fig]', 
'div[class$=mple]', 
'div[class*=e]', 
'dfn[data-export|=data]', 
'div[class!=example]',
'div[class^=exa][class$=mple]',
'div[class~=figure]'
];

window.pseuSelectors = [
'p:nth-child(even)',
'p:nth-child(odd)', 
'p:nth-child(2n)',
'p:nth-child(3n)',
'p:nth-child(n-4)',
'p:nth-child(2n+1)',
'p:nth-child(-2n+2)', 
'p:nth-child(-n+6)',
'p:nth-child(0n+2)',
'p:nth-child(5)',
'p:only-child', 
'p:last-child', 
'p:first-child',
'div:empty'
];

window.extraSelectors = [
'p:nth-last-child(even)',
'p:nth-of-type(even)',
'p:nth-last-of-type(even)',
'p:nth-last-child(odd)',
'p:nth-of-type(odd)',
'p:nth-last-of-type(odd)',
'p:nth-last-child(2n)',
'p:nth-of-type(2n)',
'p:nth-last-of-type(2n)',
'p:nth-last-child(3n)',
'p:nth-of-type(3n)',
'p:nth-last-of-type(3n)',
'p:nth-last-child(n-4)',
'p:nth-of-type(n-4)',
'p:nth-last-of-type(n-4)',
'p:nth-last-child(2n+1)',
'p:nth-of-type(2n+1)',
'p:nth-last-of-type(2n+1)',
'p:nth-last-child(-2n+2)',
'p:nth-of-type(-2n+2)',
'p:nth-last-of-type(-2n+2)',
'p:nth-last-child(-n+6)',
'p:nth-of-type(-n+6)',
'p:nth-last-of-type(-n+6)',
'p:nth-last-child(0n+2)',
'p:nth-of-type(0n+2)',
'p:nth-last-of-type(0n+2)',
'p:nth-last-child(5)',
'p:nth-of-type(5)',
'p:nth-last-of-type(5)',
'p:only-of-type',
'p:last-of-type',
'p:first-of-type',
'div:not(.example)', 
'div:not(:nth-child(odd))',
'*:not(#title)',
'*:not([class])',
'div:has(p)',
'*:has(div ~ p)',
'*:contains(child)',
'p:first',
'p:last',
'div div :even',
'div div :odd',
'div p:nth(even)',
'div p:nth(odd)',
'div p:nth(2n)',
'div p:nth(-n+5)',
'div p:nth(0n+2)'
]; 

window.crazySelectors = [
'div + div, div ~ div, div',
'div ~ div, div',
'div + *',
'div > div, div + div, div ~ div',
'div:not(:not(.example))',
'div.example',
'div:not(:not(:not(.example)))',
'div:not(.example)',
'div:not(a, p)',
'*:has(:not(a, p))',
'* * *',
'* div *',
'* > * + * ~ *',
'*.fn.url, .example.example',
'h1#title'
];

window.customSelectors = [

];

window.allSelectors = relativeSelectors.concat(clsSelectors).concat(attrSelectors).concat(pseuSelectors);

// default loaded selectors
window.selectors = relativeSelectors;

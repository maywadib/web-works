function fnParams(name1,name2,name3) {
    console.log(name1,name2,name3);
}


function fnParams1(...myParams) {
    console.log(myParams);
    
}

function fnParams2(category, ...items) {
    console.log(category);
    console.log(items);
    
    
}


fnParams("MAyur","blah","blah")
fnParams1();
fnParams1("a","b","c","d");
fnParams2("Electronics");
fnParams2("Electronics","laptop","computer","mobile");

/**
 * 
 * MAyur blah blah
[]
[ 'a', 'b', 'c', 'd' ]
Electronics
[]
Electronics
[ 'laptop', 'computer', 'mobile' ]
 * 
 */
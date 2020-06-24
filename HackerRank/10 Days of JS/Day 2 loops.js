function vowelsAndConsonants(s) {
    var vowels =[]
    var consonants =[]
	for (var i = 0; i < s.length; i++) {
		if (s[i] == "a"||s[i] == "e" ||s[i] == "i" ||s[i] == "o" || s[i] =="u" ) {
           
            vowels.push(s[i])

        } else{
            consonants.push(s[i])
        }
    }
    vowels.map(i =>console.log(i))
    consonants.map(i =>console.log(i))
    
}

vowelsAndConsonants("rzzzaerwerre");

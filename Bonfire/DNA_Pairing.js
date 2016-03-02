function pair(str) {
    // split the "str" into an array
    var dna = str.split('');
    
    // make a loop to go through the array
    for (var i = 0; i < dna.length; i++) {
        
        // confirm the DNA character and add it to its pair within an array.
        // Then place that array inside of the original array
        if (dna[i] == "G") {
            dna[i] = [dna[i], 'C']; 
        }
        
        // confirm the DNA character and add it to its pair within an array.
        // Then place that array inside of the original array
        if (dna[i] == "C") {
          dna[i] = [dna[i], 'G']; 
        }
        
        // confirm the DNA character and add it to its pair within an array.
        // Then place that array inside of the original array
        if (dna[i] == "A") {
          dna[i] = [dna[i], 'T']; 
        }
        
        // confirm the DNA character and add it to its pair within an array.
        // Then place that array inside of the original array
        if (dna[i] == "T") {
          dna[i] = [dna[i], 'A']; 
        }
        
    }
    return dna;
}

pair("GCG");
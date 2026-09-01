class Solution {
public:
    bool islowerr(string word){
        for(char x:word){
            if(!islower(x)){
                return false;
            }
            
        }
        return true;

    }
    bool isupperr(string word){
        for(char x:word){
            if(!isupper(x)){
                return false;
            }
        }
        return true;

    }
    bool isfirst(string word){


        string word1=word.substr(1,word.length());
       for(int i=0;i<word.length();i++){
        if(isupper(word[0]) && islowerr(word1) ){
            return true;
        }
       }
        return false;

    }


    bool detectCapitalUse(string word) {
        // three senerio 
        // first semerio is - all string is uppercase
        // second senerioa is all string is lowercase
        // third senerio sis all string is first element is uppercasre rest all are lowercase
    bool isuppercase=isupperr(word);

    bool islowercase=islowerr(word);
    bool isfirstisUpper=isfirst(word);

        // else we simple says false;
        if(isuppercase==true || islowercase==true || isfirstisUpper==true){
            return true;
        }
        else{
            return false;
        }


        
    }
};
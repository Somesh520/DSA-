class Solution {
public:
    void lowercase(string &word){
        // here we simpley chane the lowercase ok 
        for(int i=0;i<word.length();i++){
            word[i]=tolower((unsigned char) word[i]);
        }

    }

    void capitalize(string &word){
        if(!word.empty()){
            return;
        }
        word[0]=toupper((unsigned char) word[0]);
        for(int i=1;i<word.length();i++){
            word[i]=tolower((unsigned char)word[i]);
        }

    }
    string capitalizeTitle(string title) {
        // now we add the the main string stream 

        stringstream ss(title);
        string word;
        string ans;

        while(ss>>word){

            // now here check the lenght is 2 ,1
            // if(word.empty()){
            //     return ;
            // }
            if(word.length()<=2){
                // add the lower funcion 
                // now lowercase the word 
                lowercase(word);
            }
            else{
                capitalize(word);
            }
            if(!ans.empty()){
                ans+=" ";

            }
            ans+=word;
        }

        return ans;

        
    }
};
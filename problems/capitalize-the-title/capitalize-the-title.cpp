class Solution {
public:
    void capitalize(string &word){
        if(word.empty()){
            return ;
        }
        word[0]=toupper((unsigned char )word[0]);

        for(int  i=1;i<word.length();i++){
            word[i]=tolower((unsigned char)word[i]);
        }

    }

    string capitalizeTitle(string title) {
        // first we make and vector....
        // then we iterate the string an check the size if size is 1 or 2 we simply lowercase the string and 

        vector<string>ans;
        for(int i=0;i<title.length();i++){
            ans.push_back(title[i]);
            // we pushed all the string 

        }

        for(int i=0;i<ans.size();i++){
            // first check the length of array 
            if(ans[i].length()<2){
                // we simply lowercase 
                for(char x:arr[i]){
                    tolower(x);
                }

            }

            else{
                capitalize(ans[i]);
            }

        }
        

        // now we check the lenght 
        
    }
};
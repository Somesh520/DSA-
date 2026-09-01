class Solution {
public:
    vector<bool>answer;
    void ischeck(vector<int>&nums,int l,int r){
        // now we make an array and checkt he 
        // make and subarray then we proceed the question 
        vector<int>arr(nums.begin()+l,nums.begin()+r+1);
        sort(arr.begin(),arr.end());
        int differe=arr[1]-arr[0];

        for(int i=0;i<arr.size()-1;i++){
            // here we check the 
            if(arr[i+1]-arr[i]!=differe){
                answer.push_back(false);
                return;
            }

        }
        answer.push_back(true);




    }
    vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r) {

        // lets first we check the function then pass the array and parameter then make 
        // an arraya then we check the differeccen we can simple do it via mod 
        // lets go 
       
        for(int i=0;i<l.size();i++){
            ischeck(nums,l[i],r[i]);
        }

        return answer;
        
    }
};  
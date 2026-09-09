class Solution {
public:

    void solve(vector<vector<int>>&ans,vector<int>output,vector<int>nums,int index){
        if(index>=nums.size()){

            ans.push_back(output);
            return;
        }
        // exclude krne 
        solve(ans,output,nums,index+1);
        output.push_back(nums[index]);
        solve(ans,output,nums,index+1);

    }
    vector<vector<int>> subsets(vector<int>& nums) {
        // bhiya ne include and exclude ke tarike se solve krna sikhaya hai ok 
        vector<vector<int>>ans;
        vector<int>output;
        solve(ans,output,nums,0);

        return ans;
        
    }
};
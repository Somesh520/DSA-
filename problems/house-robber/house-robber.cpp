class Solution {
public:
    int solve(vector<int>&nums,int index,vector<int>arr){
        if(index>=nums.size()){
            return 0;
        }
        if(arr[index]!=-1){
            return arr[index];
        }
        
        int include=nums[index]+solve(nums,index+2,arr);
        int exclude=0+solve(nums,index+1,arr);

        arr[index]=max(include,exclude);


    }
    int rob(vector<int>& nums) {
        vector<int>arr(n+1,-1);

        int ans=solve(nums,0,arr);
        return arr[n];

        
    }
};
class Solution {
public:
    

    int solve(int n,vector<int>&arr){
        // here we write the frist conditon 
        if(n==0){
            return 0;
        }
        if(arr[n]!=-1){
            return arr[n];
        }
        int mincount=INT_MAX;
        for(int i=1;i*i<=n;i++){
            // now here 
            int result=1+solve(n-i*i,arr);
            mincount=min(mincount,result);
        }
        return arr[n]=mincount;
    }
    int numSquares(int n) {
        // let solve this problem 
        //first we build the story 
        // make helper function for this 
        vector<int>arr(n+1,-1);
        int helper=solve(n,arr);
        return helper;
        
    }
};
class Solution {
public:
    int climbStairs(int n) {

        // here we make the platform for dp array 
        vector<int>dp(n+1,-1);
        // initialed with -1
        if(n==1){
            return 1;

        }
        dp[1]=1;
        dp[2]=2;
        for(int i=3;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }

        return dp[n];

        
    }
};
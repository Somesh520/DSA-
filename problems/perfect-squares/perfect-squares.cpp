class Solution {
public:

    int solve(int n){
        // here we write the frist conditon 
        if(n==0){
            return 0;
        }
        int mincount=INT_MIN;
        for(int i=0;i*i<=n;i++){
            // now here 
            int result=1+solve(n-1);
            mincount=min(mincount,result);
        }
        return mincount;
    }
    int numSquares(int n) {
        // let solve this problem 
        //first we build the story 
        // make helper function for this 
        int helper=solve(n);
        return helper;
        
    }
};
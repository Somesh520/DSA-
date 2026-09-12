class Solution {
public:
    int tribonacci(int n) {
        // so basically here we can do this by creating an vecotr .
        vector<int>arr(n+1);
        if(n==0){
            return 0;
        }
        if(n==1 || n==2){
            return 1;
        }
        arr[0]=0;
        arr[1]=1;
        arr[2]=1;
       
            // means greater than 2 
            for(int i=3;i<=n;i++){
                arr[i]=arr[i-3]+arr[i-2]+arr[i-1];
            }

            return arr[n];
        
        
    }
};

//two pointer approcah
class Solution {
public:
    vector<int> twoSum(vector<int>& arr, int target) {
        
        int n =arr.size();
        int left=0;
        int right=n-1;
        vector<int> re;
        while(left<right){

            int sum;

            sum=arr[left]+arr[right];
            if(sum>target){
                right--;
            }
            if(sum<target){
                left++;
            }

            if(sum==target){
                re.push_back(left+1);
                re.push_back(right+1);
                return re;
            }
        }return re;
    }
}; 
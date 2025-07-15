class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int>arrr;
        for(int i=0;i<m;i++){

          
                 int element=nums1[i];
            arrr.push_back(element);
           
           
            
        }
        for(int i=0;i<n;i++){

            int element=nums2[i];
            arrr.push_back(element);

        }
        sort(arrr.begin(),arrr.end());
        for (int i = 0; i < m + n; i++) {
            nums1[i] = arrr[i];
        }
       
    }
};
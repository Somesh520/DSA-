#include<bits/stdc++.h>
using namespace std;
  
bool ispair(vector<int>arr,int k){
    map<int,int>mp;
    for(int i=0;i<arr.size();i++){
        int currentindex=arr[i];

        if(mp.find(currentindex)!=mp.end()){
            int lastindex=mp[currentindex];
            if(i-lastindex<=k){
                return true;
            }
        }
        mp[currentindex]=i;
    }
    return false;
}


int main(){
    int n;
    // cin>>n;
    vector<int>arr={3,2,4,3,1};
    

    int k ; 
    // cin>>k;
    k=5;

    // now check the distacen 
    cout<<ispair(arr,k);
    
}
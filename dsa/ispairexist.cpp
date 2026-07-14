#include<bits/stdc++.h>
using namespace std;

int ispair(vector<int>arr,int k){
    map<int,int>mp;
    int count=0;

    for(int i=0;i<arr.size();i++){
        int comp=k-arr[i];
        if(mp.find(comp)!=mp.end()){
count++;
        }

        mp[arr[i]]=1;
    }

    return count;
}

int main(){
    vector<int>arr={1,2,3,4,5};
    int k=90;

    // now find the total pair 
    cout<<ispair(arr,k);
}

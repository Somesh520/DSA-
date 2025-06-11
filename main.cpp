#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;
void printr(vector<int>arr){
    int size;
    size=arr.size();
    for(int i=0;i<size;i++){
        cout<<arr[i]<<endl;
    }
}
int main(){
    vector<int>arr;
    arr.push_back(25);
    arr.push_back(5);
    arr.push_back(89);
    arr.push_back(2);
    arr.push_back(5);
// printr(arr);
vector<int>::iterator it;
for(it=arr.begin();it!=arr.end();++it){
    cout<<*it<<endl;
}
cout<<endl;
//binary search 
int n=arr.size();
for(int i=0;i<n;i++){
    for(int j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            int temp;
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;

        }
    }
}

printr(arr);

int low,high;
low=arr[0];
high=arr[n-1];
int key;
    cin>>key;
while(low<high){
    int mid=(low+high)/2;
    
    if(arr[mid]>key){
        high=mid-1;
    }
    if(arr[mid]<key){
        low=mid+1;
    }
    mid=(low+high)/2;
}



}
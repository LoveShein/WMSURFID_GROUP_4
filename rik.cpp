#include <iostream>
#include <vector>
using namespace std;

struct Book {
    string barcode, title;
    int year;
    int rating;
};

string getCategory(int r){
    if(r==5) return "Excellent";
    if(r==4) return "Very Good";
    if(r==3) return "Good";
    if(r==2) return "Fair";
    if(r==1) return "Poor";
    return "No Rating";
}

bool exists(vector<Book>& b, string code){
    for(auto &x : b) if(x.barcode == code) return true;
    return false;
}

void add(vector<Book>& b){
    Book x;
    do{
        cout<<"Barcode: "; cin>>x.barcode;
    }while(exists(b,x.barcode));
    cin.ignore();
    cout<<"Title: "; getline(cin,x.title);
    cout<<"Year: "; cin>>x.year;
    cout<<"Rating: "; cin>>x.rating;
    b.push_back(x);
}

void edit(vector<Book>& b){
    string code; cout<<"Enter Barcode: "; cin>>code;
    for(auto &x : b){
        if(x.barcode == code){
            cin.ignore();
            cout<<"New Title: "; getline(cin,x.title);
            cout<<"New Year: "; cin>>x.year;
            cout<<"New Rating: "; cin>>x.rating;
            return;
        }
    }
}

void del(vector<Book>& b){
    string code; cout<<"Enter Barcode: "; cin>>code;
    for(int i=0;i<b.size();i++){
        if(b[i].barcode == code){
            b.erase(b.begin()+i);
            return;
        }
    }
}

void display(vector<Book>& b){
    for(auto &x : b){
        cout<<x.barcode<<" "<<x.title<<" "<<x.year<<" "<<x.rating<<" "<<getCategory(x.rating)<<endl;
    }
}

int main(){
    vector<Book> b;
    int ch;
    do{
        cout<<"\n1 Add\n2 Edit\n3 Delete\n4 Display\n5 Exit\nChoice: ";
        cin>>ch;
        if(ch==1) add(b);
        else if(ch==2) edit(b);
        else if(ch==3) del(b);
        else if(ch==4) display(b);
    }while(ch!=5);
}
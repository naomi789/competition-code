#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    char letter;
    int error=0;
    while(cin>>letter)
    {
        if(letter=='S')
        {
            cin>>letter;
            if(letter=='O')
            {
                cin>>letter; 
                if(letter=='S')
                {
                    break;
                }
                else 
                {
                    error++;
                } 
            }
            else 
            {
                error++;
                //cout << "ERROR: " << error << endl;
            }    
        }
        else 
        {
            error++;
            //cout << "ERROR: " << error << endl;
        } 
        error++;
        cout << error << endl;
    }
    cout << error << endl;
    return 0;
}
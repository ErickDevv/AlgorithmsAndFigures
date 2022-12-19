pub fn binary_search(arr: &[i32], target: i32) -> &str {
    let mut low = 0;
    let mut high = arr.len() - 1;

    while low <= high {
        let mid = (low + high) / 2;


        if arr[mid] == target {
            return "Found";
        } else if arr[mid] < target {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return "Not found";
}

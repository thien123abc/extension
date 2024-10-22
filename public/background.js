
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showPopup") {
        sendResponse({ success: true });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showPopup") {
        sendResponse({ success: true });
    } 
    
    // Xử lý khi có yêu cầu lấy dữ liệu mạng
    else if (request.action === "getNetworkData") {
        let networkData = [];

        // Sử dụng chrome.webRequest để theo dõi tất cả các request đã hoàn thành
        chrome.webRequest.onCompleted.addListener((details) => {
            // Lưu trữ thông tin của các yêu cầu mạng đã hoàn thành
            networkData.push({
                url: details.url,
                method: details.method,
                statusCode: details.statusCode,
                type: details.type
            });
        }, { urls: ["<all_urls>"] });

        // Gửi dữ liệu mạng về content script
        sendResponse({ networkData });
    }

    // Return true để giữ kênh kết nối mở trong khi sendResponse được xử lý không đồng bộ
    return true;
});
``

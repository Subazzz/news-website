package com.usecase.news.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.usecase.news.model.NewsFeed;
import com.usecase.news.repository.NewsRepository;
import com.usecase.news.service.NewsService;

@RestController
public class NewsController {
	
	@Autowired
	NewsService newsService;
	
	@Autowired
	NewsRepository newa;
	
	
	// fetch all
	@GetMapping("/homepage")
	public List<NewsFeed> homepage () {
		
		return newsService.homepage() ;
		
	}
	//fetchby category
	@GetMapping("/homepage/category")
	public NewsFeed fetchCategory(@RequestParam String category) {
		NewsFeed catg = null;
		try {
			catg = newsService.fetchCategory(category );
			
			if(catg==null) {
				catg= new NewsFeed();
				catg.setMessage("Category not found");
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
			
		return catg;
		
	}
	
	// fetch by category in url
	@GetMapping("/homepage/{NewsFeed_category}")
	public NewsFeed pathCategory(@PathVariable ("NewsFeed_category") String category) {
		NewsFeed catg = null;
		try {
			catg = newsService.fetchCategory(category );
			if(catg==null) {
				catg= new NewsFeed();
				catg.setMessage("Category not found");
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
			
		return catg;
		
	}
	
	//fetch by id
	@GetMapping("/num/{NewsFeed_no}")
	public NewsFeed pathTitle(@PathVariable ("NewsFeed_no") String no) {
		NewsFeed catg = null;
		try {
			catg = newsService.fetchNum(no );
			if(catg==null) {
				catg= new NewsFeed();
				catg.setMessage("Category not found");
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
			
		return catg;
		
	}
	
	@GetMapping("date/{date}")
     public List<NewsFeed> getNewsDate(@PathVariable String date){	 
    	 List<NewsFeed> dt = newa.findByDate(date);
    	 return dt;
    	 
     }
	
//	@GetMapping("cat/{category}")
//    public List<NewsFeed> getNewsCategory (@PathVariable String category){	 
//   	 List<NewsFeed> cat = newa.findByCategory(category);
//   	 return cat;
//   	 
//    }
	
	
	
	
	// fetch by specific priority
	@GetMapping("/id/{NewsFeed_priority}")
	public ResponseEntity<?> pathId(@PathVariable ("NewsFeed_priority") String priority) {
		 //System.out.println(priority);
		List<NewsFeed> jsonvalues =  newa.findAll();
			
		return new ResponseEntity<>(jsonvalues,!jsonvalues.isEmpty()? HttpStatus.OK:HttpStatus.NOT_FOUND);
		
	}
	 
	// fetch and sort all priority
	@GetMapping("/priority")
	public ResponseEntity<?> sortPriority( String priority) {
		 System.out.println(priority);
		List<NewsFeed> jsonvalues =  newa.findAll(Sort.by("priority").ascending());
			
		return new ResponseEntity<>(jsonvalues,!jsonvalues.isEmpty()? HttpStatus.OK:HttpStatus.NOT_FOUND);
		
	}
	
	
	@GetMapping("/newsid/{nid}")
	public ResponseEntity<?> sortId( @PathVariable ("nid") String id) {
		 System.out.println(id);
		List<NewsFeed> jsonvalues =  newa.findAll(Sort.by("id").ascending());
			
		return new ResponseEntity<>(jsonvalues,!jsonvalues.isEmpty()? HttpStatus.OK:HttpStatus.NOT_FOUND);
		
	}
	
	
	
	
}

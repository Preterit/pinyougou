package com.pinyougou.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;

/**
 * 品牌接口
 * @author PC
 *
 */
public interface BrandService {
	public List<TbBrand> findAll(); 
	
	public PageResult findPage(int pageNum,int pageSize);
	
	public void add(TbBrand tbBrand);
	
	public void update(TbBrand tbBrand);
	
	public TbBrand findOne(Long id);
	
	public void delete(Long[] ids);
	
	public PageResult search(TbBrand tbBrand,int pageNum,int pageSize);
	
	public List<Map> selectOptionList();
}
